class Github {
    constructor() {
        this.client_id = "81426aed6084af7ab428";
        this.client_secret = "74beff13ee330c7ee806717c184b0e2de367201d";
    }

    async getUser(user) {
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}