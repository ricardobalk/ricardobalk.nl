<template>
    <section class="services" :title="title" tabindex="0">
        <div class="grid-x">
            <div class="small-12 large-offset-1 large-10 cell">
                <h2 class="title text-center">{{title}}</h2>
                <div class="grid-x cards">
                    <Service v-for="(service, index) in services" :key="index" :service="service"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Service from "./Service";

    export default {
        name: "Services",
        components: {Service},
        props: {
            "title": {
                type: String, required: false, default() {
                    return "Things I could help you with";
                }
            },
            "services": {
                type: Array, required: true, default() {
                    return [
                        {
                            "title": "Service 1",
                            "caption": "You might have forgotten to add services.",
                            "icon": "exclamation-triangle"
                        },
                        {
                            "title": "Service 2",
                            "caption": "Please take a look in the Vue templates to see what is expected.",
                            "icon": "eye"
                        },
                        {
                            "title": "Service 3",
                            "caption": "These are just some defaults.",
                            "icon": "check"
                        },
                        {
                            "title": "Service 4",
                            "caption": "At least things won't break this way.",
                            "icon": "ban"
                        }
                    ]
                }
            }
        }
    }
</script>

<style lang="scss">
    // Standard
    .services {
        max-width: 1600px;
        margin: 2em auto;
        color: var(--color-regular-text);

        .title {
            text-transform: uppercase;
            padding: 0 1em;
            font-size: 1.33em;
            line-height: 1.5;
            letter-spacing: 0.003em;
            font-weight: 500;
        }

        .card {
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-flow: row wrap;

            .service {
                display: flex;
                text-align: center;
                justify-self: stretch;

                .icon-container {
                    color: var(--color-white);
                    background: #001037 linear-gradient(-30deg, #001037, #1e3d95);

                    .icon {
                        &.fa-mouse-pointer::before {
                            padding-left: 0.15em;
                        }

                        &.fa-code::before {
                            padding-right: 0.05em;
                        }
                    }
                }

                .inner {
                    h3 {
                        text-transform: uppercase;
                        font-weight: 900;
                        line-height: 1.5;
                        font-size: 1em;
                        letter-spacing: 0;
                    }
                }
            }

            @media screen and (max-width: 640px) {
                padding: 0 1em;
            }
        }
    }

    // Dark
    @media screen and (prefers-color-scheme: dark) {
        .services {
            .cards {
                .card {
                    color: #707070;

                    .service {
                        .inner {
                            background-color: #000 !important;
                            color: #707070;
                            border: none;

                            .icon-container {
                                background: none;
                                color: #cacaca;
                                border: 1px solid rgba(248, 248, 248, 0.21);
                                box-sizing: content-box;
                                align-items: center;
                                border-radius: 25%;
                                margin-bottom: 1.5em;
                            }
                        }
                    }

                    &:not(:last-child) {
                        border-right: 1px solid #111;
                    }
                }
            }
        }
    }
</style>