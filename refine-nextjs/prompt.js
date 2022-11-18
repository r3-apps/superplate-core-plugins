module.exports = {
    prompts: [
        {
            name: "data-provider",
            message: "Choose your backend service to connect:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "REST API",
                    name: "data-provider-custom-json-rest",
                    hint: "Installs REST API Data Provider.",
                },
                {
                    message: "GraphQL API",
                    name: "data-provider-graphql",
                    hint: "Installs GraphQL API Data Provider.",
                },
                {
                    message: "Strapi v4",
                    name: "data-provider-strapi-v4",
                    hint: "Installs Strapi v4 Data Provider.",
                },
                {
                    message: "Strapi v3",
                    name: "data-provider-strapi",
                    hint: "Installs Strapi v3 Data Provider.",
                },
                {
                    message: "Strapi GraphQL",
                    name: "data-provider-strapi-graphql",
                    hint: "Installs Strapi v3 GraphQL Data Provider.",
                },
                {
                    message: "nestjsx-crud",
                    name: "data-provider-nestjsx-crud",
                    hint: "Installs Nestjsx-crud Data Provider.",
                },
                {
                    message: "Airtable",
                    name: "data-provider-airtable",
                    hint: "Installs Airtable Data Provider.",
                },
                {
                    message: "Supabase",
                    name: "data-provider-supabase",
                    hint: "Installs Supabase Data Provider.",
                },
                {
                    message: "Appwrite",
                    name: "data-provider-appwrite",
                    hint: "Installs Appwrite Data Provider.",
                },
                {
                    message: "Hasura",
                    name: "data-provider-hasura",
                    hint: "Installs Hasura Data Provider.",
                },
                {
                    message: "Medusa",
                    name: "data-provider-medusa",
                    hint: "Installs Medusa Data Provider.",
                },
            ],
            default: "data-provider-custom-json-rest",
        },
        {
            name: "ui-framework",
            message: "Do you want to use a UI Framework?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "Headless",
                    name: "no",
                    hint: "No UI framework packages will be installed.",
                },
                {
                    message: "Ant Design",
                    name: "antd",
                    hint: "Installs Ant Design packages.",
                },
                {
                    message: "Material UI",
                    name: "mui",
                    hint: "Installs Material UI packages.",
                },
                {
                    message: "Mantine",
                    name: "mantine",
                    hint: "Installs Mantine packages.",
                },
                {
                    message: "Chakra UI",
                    name: "chakra",
                    hint: "Installs Chakra UI packages.",
                },
            ],
            default: "no",
        },
        {
            name: "antd-theme-customization",
            message: "Do you want to customize the Ant Design theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "antd-css",
                    hint: "Uses the default css.",
                },
                {
                    message: "Yes",
                    name: "antd-less",
                    hint: "Installs craco & less for theme overrides.",
                },
            ],
            default: "antd-css",
            skip: ({ answers }) => answers["ui-framework"] !== "antd",
        },
        {
            name: "mui-extend-theme",
            message: "Do you want to customize the Material UI theme?:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no", hint: "Uses the default theme." },
                {
                    message: "Yes",
                    name: "mui-extend-theme",
                    hint: "Configure the project for theme overrides.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "antd-custom-layout",
            message: "Do you want to customize the Ant Design layout?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "Uses the default page layout.",
                },
                {
                    message: "Yes",
                    name: "antd-custom-layout",
                    hint:
                        "Enables custom page layout (Sider, header, footer etc.)",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "antd",
        },
        {
            name: "mui-custom-layout",
            message: "Do you want to customize the Material UI layout?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "Uses the default page layout.",
                },
                {
                    message: "Yes",
                    name: "mui-custom-layout",
                    hint:
                        "Enables custom page layout (Sider, header, footer etc.)",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "mantine-custom-layout",
            message: "Do you want a customized layout?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "Uses the default page layout.",
                },
                {
                    message: "Yes",
                    name: "mantine-custom-layout",
                    hint:
                        "Enables custom page layout (Sider, header, footer etc.)",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mantine",
        },
        {
            name: "chakra-custom-layout",
            message: "Do you want a customized layout?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "Uses the default page layout.",
                },
                {
                    message: "Yes",
                    name: "chakra-custom-layout",
                    hint:
                        "Enables custom page layout (Sider, header, footer etc.)",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "chakra",
        },
        {
            name: "mui-dark-mode",
            message: "Do you want to add dark mode support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "Only light theme will be installed.",
                },
                {
                    message: "Yes",
                    name: "mui-dark-mode",
                    hint: "Both light & dark themes will be installed.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "mantine-dark-mode",
            message: "Do you want to add dark mode support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "Only light theme will be installed.",
                },
                {
                    message: "Yes",
                    name: "mantine-dark-mode",
                    hint: "Both light & dark themes will be installed.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mantine",
        },
        {
            name: "chakra-dark-mode",
            message: "Do you want to add dark mode support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "Only light theme will be installed.",
                },
                {
                    message: "Yes",
                    name: "chakra-dark-mode",
                    hint: "Both light & dark themes will be installed.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "chakra",
        },
        {
            name: "auth-provider",
            message: "Do you need any Authentication logic?:",
            type: "select",
            choices: [
                {
                    message: "None",
                    name: "none",
                    hint: "No Auth Provider will be installed.",
                },
                {
                    message: "Custom",
                    name: "auth-provider-custom",
                    hint: "Installs a mock Auth Provider.",
                },
            ],
            skip: ({ answers }) =>
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-nhost",
            default: "none",
        },
        {
            name: "i18n-no",
            message: "Do you need i18n (Internationalization) support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No i18n packages will be installed.",
                },
                {
                    message: "Yes",
                    name: "i18n",
                    hint: "Installs i18n packages.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "no",
        },
        {
            name: "i18n-antd",
            message: "Do you need i18n (Internationalization) support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No i18n packages will be installed.",
                },
                {
                    message: "Yes",
                    name: "i18n-antd",
                    hint: "Installs i18n packages.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "antd",
        },
        {
            name: "i18n-mui",
            message: "Do you need i18n (Internationalization) support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No i18n packages will be installed.",
                },
                {
                    message: "Yes",
                    name: "i18n-mui",
                    hint: "Installs i18n packages.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mui",
        },
        {
            name: "i18n-mantine",
            message: "Do you need i18n (Internationalization) support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No i18n packages will be installed.",
                },
                {
                    message: "Yes",
                    name: "i18n-mantine",
                    hint: "Installs i18n packages.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "mantine",
        },
        {
            name: "i18n-chakra",
            message: "Do you need i18n (Internationalization) support?:",
            type: "select",
            pageSize: 2,
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No i18n packages will be installed.",
                },
                {
                    message: "Yes",
                    name: "i18n-chakra",
                    hint: "Installs i18n packages.",
                },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "chakra",
        },
        {
            name: "antd-example-pages",
            message: "Add example pages?:",
            type: "select",
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No examples will be installed.",
                },
                {
                    message: "Yes (Recommended)",
                    name: "antd-example-pages",
                    hint: "Installs example pages.",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-airtable" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-altogic" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-nhost" ||
                answers["ui-framework"] !== "antd",
            default: "no",
        },
        {
            name: "mui-example-pages",
            message: "Add example pages?:",
            type: "select",
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No examples will be installed.",
                },
                {
                    message: "Yes (Recommended)",
                    name: "mui-example-pages",
                    hint: "Installs example pages.",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-airtable" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-altogic" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-nhost" ||
                answers["ui-framework"] !== "mui",
            default: "no",
        },
        {
            name: "mantine-example-pages",
            message: "Add example pages?:",
            type: "select",
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No examples will be installed.",
                },
                {
                    message: "Yes (Recommended)",
                    name: "mantine-example-pages",
                    hint: "Installs example pages.",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-airtable" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-altogic" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-nhost" ||
                answers["ui-framework"] !== "mantine",
            default: "no",
        },
        {
            name: "chakra-example-pages",
            message: "Add example pages?:",
            type: "select",
            choices: [
                {
                    message: "No",
                    name: "no",
                    hint: "No examples will be installed.",
                },
                {
                    message: "Yes (Recommended)",
                    name: "chakra-example-pages",
                    hint: "Installs example pages.",
                },
            ],
            skip: ({ answers }) =>
                answers["ui-framework"] === "no" ||
                answers["data-provider"] === "data-provider-strapi" ||
                answers["data-provider"] === "data-provider-airtable" ||
                answers["data-provider"] === "data-provider-supabase" ||
                answers["data-provider"] === "data-provider-graphql" ||
                answers["data-provider"] === "data-provider-strapi-graphql" ||
                answers["data-provider"] === "data-provider-altogic" ||
                answers["data-provider"] === "data-provider-medusa" ||
                answers["data-provider"] === "data-provider-strapi-v4" ||
                answers["data-provider"] === "data-provider-appwrite" ||
                answers["data-provider"] === "data-provider-hasura" ||
                answers["data-provider"] === "data-provider-nhost" ||
                answers["ui-framework"] !== "chakra",
            default: "no",
        },
        {
            name: "command-palette",
            message: "Do you want to add Kbar command pallette:",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "kbar" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] === "no",
        },
        {
            name: "partytown-builder",
            message:
                "Do you want to add Partytown? (https://partytown.builder.io)",
            type: "select",
            pageSize: 2,
            choices: [
                { message: "No", name: "no" },
                { message: "Yes", name: "partytown-builder" },
            ],
            default: "no",
            skip: ({ answers }) => answers["ui-framework"] !== "no",
        },
    ],
    ignores: [
        {
            plugin: ["kbar"],
            when: function (answers) {
                return (
                    answers["ui-framework"] === "antd" &&
                    answers["antd-custom-layout"] !== "no"
                );
            },
            pattern: ["src/components/**"],
        },
    ],
};
