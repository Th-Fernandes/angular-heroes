export interface Filters {
  salaryRange: SalaryRange | null;
  positionLevel: PositionLevel | null;
  opportunityType: null | 'faceToFace' | 'hybrid' | 'remote';
}

export type SalaryRange = '0' | '1' | '2' | '3'| '4'
export type PositionLevel = 'jr' | 'pl' | 'sr'