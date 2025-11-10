
export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Member {
  name: string;
  role: string;
  campus?: 'Yangon' | 'Mandalay';
}
