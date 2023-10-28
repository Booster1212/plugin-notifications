export interface Notification {
    icon: string;
    title: string;
    message: string;
    duration?: number;
    // DO NOT SET EVER (Will need a workaround in future)
    progress?: number;
    startTime?: number;
    id?: number;
}
