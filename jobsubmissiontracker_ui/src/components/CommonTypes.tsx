export interface SubmissionsRecord{
    jobPostingId?: string,
    jobPostingName?: string,
    pointOfContact?: string,
    hiringCompany?: string,
    salary?: string,
    status?: string,
    jobUrl?: string,
    interviewProcess?: InterviewProcess,
    notes?: string,
    isHeart?: boolean,
    submissionDate?: string,

}

export interface InterviewProcess{
    currentRound?: number,
    numberOfRounds?: number,
    interviewRounds?: string[]

}
