export interface IInspections {
    id: number;
    status: string;
    comments: string;
    inspectionTypeId: number;
    inspectionType?: string | null;
    numberOfRepetitions: number
}