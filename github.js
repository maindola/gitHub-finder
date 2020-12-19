class GitHub {
    constructor() {
        this.client_id = 'e2889697b273f52f3109';
        this.client_secret = '9159e0dd9414a4e4893cd9d304d4660823a66ad4';
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
                
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret${this.client_secret}`);
        const profileResponse = await fetch(`https://api.github.com/users/${user}?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);
        
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}