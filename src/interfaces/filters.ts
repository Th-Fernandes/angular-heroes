export interface Filters {
  salaryRange: SalaryRange | null;
  positionLevel: null | 'jr' | 'pl' | 'sr';
  opportunityType: null | 'faceToFace' | 'hybrid' | 'remote';
}

export type SalaryRange = '0' | '1' | '2' | '3'| '4'