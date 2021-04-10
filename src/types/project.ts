export interface PhotoDetail {
  photo: string;
  title: string;
}

export interface DateRangeData {
  startDate: string;
  endDate?: string;
}

export interface DateRange {
  startDate: Date;
  endDate?: Date;
}

export interface ProjectArea {
  name: string;
  description: string;
  color: string;
  technologies: string[];
}
