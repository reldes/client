import {
  avrInstruction,
  AVRTimer,
  CPU,
  timer0Config,
  AVRIOPort,
  portBConfig,
  portCConfig,
  portDConfig
} from "avr8js";

// ATmega328p params
const FLASH = 0x8000;

export function loadHex(source: string, target: Uint8Array) {
  for (const line of source.split('\n')) {
    if (line[0] === ':' && line.substr(7, 2) === '00') {
      const bytes = parseInt(line.substr(1, 2), 16);
      const addr = parseInt(line.substr(3, 4), 16);
      for (let i = 0; i < bytes; i++) {
        target[addr + i] = parseInt(line.substr(9 + i * 2, 2), 16);
      }
    }
  }
}

export class AVRRunner {
  readonly program = new Uint16Array(FLASH);
  readonly cpu: CPU;
  readonly timer: AVRTimer;
  readonly portB: AVRIOPort;
  readonly portC: AVRIOPort;
  readonly portD: AVRIOPort;

  private stopped = false;

  constructor() {
    this.uploadHex('');
    this.cpu = new CPU(this.program);
    this.timer = new AVRTimer(this.cpu, timer0Config);
    this.portB = new AVRIOPort(this.cpu, portBConfig);
    this.portC = new AVRIOPort(this.cpu, portCConfig);
    this.portD = new AVRIOPort(this.cpu, portDConfig);
  }

  uploadHex(hex: string) {
    loadHex(hex, new Uint8Array(this.program.buffer));
  }

  async execute(callback: (cpu: CPU) => void) {
    this.stopped = false;
    for (; ;) {
      avrInstruction(this.cpu);
      this.cpu.tick();
      if (this.cpu.cycles % 50000 === 0) {
        callback(this.cpu);
        await new Promise(resolve => setTimeout(resolve, 0));
        if (this.stopped) {
          break;
        }
      }
    }
  }

  stop() {
    this.stopped = true;
  }
}
