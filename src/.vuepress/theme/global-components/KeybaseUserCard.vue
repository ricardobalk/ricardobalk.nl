<template>
    <div class="keybaseUserCard">
        <img class="avatar" :src="userData.them.pictures.primary.url || 'https://placehold.it/500x500'" :title="`Profile picture of ${userData.them.profile.full_name}`"/>

        <p class="username" aria-hidden="true">
            {{userData.them.basics.username}}
        </p>

        <p class="profileName">
            {{userData.them.profile.full_name}}
        </p>

        <p class="social">

        </p>

        <p class="bio">
            {{userData.them.profile.bio}}
        </p>

        <a class="contact" :href="`https://keybase.io/${userData.them.basics.username}`" :title="`Get in touch with ${userData.them.profile.full_name} via Keybase`">
            Contact via Keybase
        </a>
    </div>
</template>

<script>
    export default {
        name: "KeybaseUserCard",
        props: {
            "username": {
                type: String, required: true, default() {
                    return 'ellipticcurv3';
                }
            }
        },
        data() {
            return {
                userData: {
                    them: {
                        basics: {
                            username: "anonymous",
                        },
                        profile: {
                            full_name: "Fetching data...",
                            bio: "Fetching bio from the Keybase servers...",
                        },
                        pictures: {
                            primary: {
                                url: ""
                            }
                        }
                    }
                },
            }
        },
        mounted() {
            let keybaseAPIEndpoint = `https://keybase.io/_/api/1.0/user/lookup.json?username=${this.username}&fields=basics,profile,proofs_summary,pictures`,
                self = this; // create a closure to access component in the callback below

            fetch(keybaseAPIEndpoint)
                .then(response => response.json())
                .then(data => (self.userData = data));
        }
    }
</script>

<style lang="stylus" scoped>
    p
        margin 0

    .keybaseUserCard
        border 1px solid #ccc
        border-radius 2%
        padding 1.75rem 2rem
        margin 2em 0
        text-align center
        max-width 18rem
        @media screen and (prefers-color-scheme: dark)
            border 1px solid #333

    img.avatar
        display block
        border-radius 50%
        margin 0 auto .75rem
        max-width 60%
        max-height 33%

    .username
        font-weight 700

    .profileName
        color #666
        @media screen and (prefers-color-scheme: dark)
            color #888

    .bio
        max-height 10em
        overflow hidden
        margin .75em 0 1.25em

    .contact
        color #fff
        background-color #2e2e2e
        padding 0.5em 1em
        border-radius .5em
        display inline-block
        margin .25em 0
        @media screen and (prefers-color-scheme: dark)
            background-color #000
            border 1px solid #666
</style>
