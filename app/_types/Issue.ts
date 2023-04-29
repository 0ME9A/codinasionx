export type issueType = {
    issue_title: string;
    issue_author: string;
    issue_url: string;
    issue_short_url: string;
    issue_labels: string[];
    style?: string;
}

export type labelType = {
    label: string;
    issue_count: number;
}