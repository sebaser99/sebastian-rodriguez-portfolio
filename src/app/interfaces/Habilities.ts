export interface Habilities {
  type: TypeHability,
  name: string,
  level: LevelHability

}

export type TypeHability =   'Fronted' | 'Backend' | 'Architecture' | 'Mobile';
export type LevelHability =   'Básico' | 'Intermedio' | 'Avanzado';
