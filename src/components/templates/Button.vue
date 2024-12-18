<template>
    <div class="exp-view">
        <div class="led-editor">
            <codemirror v-model="code" :options="editorOptions"></codemirror>
            <v-btn color="primary" @click="sendCode">Build and simulate</v-btn>
        </div>

        <div class="led-scheme">
            <!-- Placeholder for LED scheme -->
            <wokwi-led v-for="led in leds" :key="led.id" :color="led.color" :pin="led.pin" :value="led.value && buttons[led.id].value ? true : false" />
            <wokwi-pushbutton v-for="button in Object.values(buttons)" :key="button.id" @button-press="clickBtn(button.id)" @button-release="buttonRelease(button.id)"></wokwi-pushbutton>
        </div>
    </div>
    <h1>Build output:</h1>
    <div class="build-output">
        <pre>{{ buildResult }}</pre>
    </div>
</template>

<script>
import { Codemirror } from 'vue-codemirror';
import { AVRRunner } from '@/utils/helpers/avr/execute';
import api from '@/utils/helpers/api/api';
import '@wokwi/elements';

export default {
    name: 'Button',
    components: {
        Codemirror
    },
    data() {
        return {
            status: '',
            buildResult: '',
            hex: null,
            avrRunner: null,
            code: '',
            editorOptions: {
                mode: 'javascript',
                theme: 'base16-dark',
                lineNumbers: true
            },
            code6LED: `
                // LEDs connected to pins 11..13
                byte leds[] = {13, 12, 11};
                void setup() {
                for (byte i = 0; i < sizeof(leds); i++) {
                    pinMode(leds[i], OUTPUT);
                }
                }
                
                int i = 0;
                void loop() {
                digitalWrite(leds[i], HIGH);
                i = (i + 1) % sizeof(leds);
                }`,
            leds: [
                { id: 0, pin: 13, value: false, color: 'red' },
                { id: 1, pin: 12, value: false, color: 'blue' },
                { id: 2, pin: 11, value: false, color: 'green' },
            ],
            buttons: {
                0: { id: 0, value: false },
                1: { id: 1, value: false },
                2: { id: 2, value: false}
            }
        };
    },
    created() {
        this.code = this.code6LED;
        this.avrRunner = new AVRRunner();
        this.avrRunner.portD.addListener((value) => {
            this.updateLEDs(value, 0);
        });
        this.avrRunner.portB.addListener((value) => {
            this.updateLEDs(value, 8);
        });
    },
    methods: {
        buttonRelease(id) {
            this.buttons[id].value = false;
        },
        clickBtn(id) {
           this.buttons[id].value = true;
        },
        async sendCode() {
            this.hex = null;
            try {
                const response = await api.experiment.build(
                    this.code
                );
                if (response) {
                    this.buildResult = response.output;
                    this.hex = response.hex;
                    this.avrRunner.uploadHex(this.hex || '');

                    this.avrRunner.execute(() =>{})
                    this.status = response.code == 0 ? 'Success' : 'Error';
                } else {
                    this.avrRunner.stop();
                    console.error('Failed to build and upload:', response.statusText);
                    this.buildResult = 'Failed to build and upload';
                    this.status = 'Error';
                }
            } catch (error) {
                console.error('Error during API call:', error);
                this.buildResult = 'Error during API call';
            }
        },
        updateLEDs(value, startPin) {
            for (const led of this.leds) {
                const pin = led.pin;
                if (pin >= startPin && pin <= startPin + 8) {
                    led.value = (value & (1 << (pin - startPin))) ? true : false;
                    this.leds.map((led) =>
                        led.pin === pin ? { ...led, value: value & (1 << (pin - startPin)) ? true : false } : led
                    )
             
                }
            }
        }
    }
};
</script>

<style scoped>
.exp-view {
    display:flex;
}
.led-editor {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.codemirror {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
}

button {
    margin-bottom: 20px;
}

.led-scheme {
    margin-left: 100px;
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
.build-output {
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
}
</style>