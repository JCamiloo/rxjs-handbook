import { GithubUser } from "./github_user.interface";

export interface GithubUsers {
  total_count:        number;
  incomplete_results: boolean;
  items:              GithubUser[];
}