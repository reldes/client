import request from "./request";

interface Experiment {
  id: number;
  title: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}


export default {
  getExperiments(): Promise<Experiment[]> {
    return request.get('experiments').then(response => response.data);
  },
  getExperiment(id: number): Promise<Experiment> {
    return request.get(`experiments/${id}`).then(response => response.data);
  },
};