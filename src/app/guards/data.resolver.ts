import { ResolveFn } from '@angular/router';

export interface Cursos {
  name: string;
  category: string;
}

export const dataResolver: ResolveFn<Cursos[]> = (route, state) => {
  const cursos: Cursos[] = [
    {name: "Curso de Angular", category: "front-end"},
    {name: "Curso de Java", category: "back-end"},
  ];
  return cursos;
};
