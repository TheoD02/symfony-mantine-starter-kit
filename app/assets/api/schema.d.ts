/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/articles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves the collection of Article resources.
         * @description Retrieves the collection of Article resources.
         */
        get: operations["api_articles_get_collection"];
        put?: never;
        /**
         * Creates a Article resource.
         * @description Creates a Article resource.
         */
        post: operations["api_articles_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/articles/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves a Article resource.
         * @description Retrieves a Article resource.
         */
        get: operations["api_articles_id_get"];
        /**
         * Replaces the Article resource.
         * @description Replaces the Article resource.
         */
        put: operations["api_articles_id_put"];
        post?: never;
        /**
         * Removes the Article resource.
         * @description Removes the Article resource.
         */
        delete: operations["api_articles_id_delete"];
        options?: never;
        head?: never;
        /**
         * Updates the Article resource.
         * @description Updates the Article resource.
         */
        patch: operations["api_articles_id_patch"];
        trace?: never;
    };
    "/api/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves a User resource.
         * @description Retrieves a User resource.
         */
        get: operations["api_logout_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Retrieves a User resource.
         * @description Retrieves a User resource.
         */
        get: operations["api_me_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Creates a user token.
         * @description Creates a user token.
         */
        post: operations["login_check_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Article: {
            readonly id?: number;
            title?: string;
            content?: string;
            /** Format: date-time */
            createdAt?: string;
        };
        "Article.jsonld": {
            readonly "@context"?: string | ({
                "@vocab": string;
                /** @enum {string} */
                hydra: "http://www.w3.org/ns/hydra/core#";
            } & {
                [key: string]: unknown;
            });
            readonly "@id"?: string;
            readonly "@type"?: string;
            readonly id?: number;
            title?: string;
            content?: string;
            /** Format: date-time */
            createdAt?: string;
        };
        "User.jsonld": {
            readonly "@context"?: string | ({
                "@vocab": string;
                /** @enum {string} */
                hydra: "http://www.w3.org/ns/hydra/core#";
            } & {
                [key: string]: unknown;
            });
            readonly "@id"?: string;
            readonly "@type"?: string;
            readonly id?: number;
            uuid?: string;
            /** @description The user roles */
            roles?: string[];
            /** @description The hashed password */
            password?: string;
            spotifyId?: string | null;
            /** @description A visual identifier that represents this user. */
            readonly userIdentifier?: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    api_articles_get_collection: {
        parameters: {
            query?: {
                /** @description The collection page number */
                page?: number;
                id?: number;
                "id[]"?: number[];
                title?: string;
                content?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Article collection */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/ld+json": {
                        "hydra:member": components["schemas"]["Article.jsonld"][];
                        "hydra:totalItems"?: number;
                        /** @example {
                         *       "@id": "string",
                         *       "type": "string",
                         *       "hydra:first": "string",
                         *       "hydra:last": "string",
                         *       "hydra:previous": "string",
                         *       "hydra:next": "string"
                         *     } */
                        "hydra:view"?: {
                            /** Format: iri-reference */
                            "@id"?: string;
                            "@type"?: string;
                            /** Format: iri-reference */
                            "hydra:first"?: string;
                            /** Format: iri-reference */
                            "hydra:last"?: string;
                            /** Format: iri-reference */
                            "hydra:previous"?: string;
                            /** Format: iri-reference */
                            "hydra:next"?: string;
                        };
                        "hydra:search"?: {
                            "@type"?: string;
                            "hydra:template"?: string;
                            "hydra:variableRepresentation"?: string;
                            "hydra:mapping"?: {
                                "@type"?: string;
                                variable?: string;
                                property?: string | null;
                                required?: boolean;
                            }[];
                        };
                    };
                };
            };
        };
    };
    api_articles_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The new Article resource */
        requestBody: {
            content: {
                "application/ld+json": components["schemas"]["Article.jsonld"];
            };
        };
        responses: {
            /** @description Article resource created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/ld+json": components["schemas"]["Article.jsonld"];
                };
            };
            /** @description Invalid input */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unprocessable entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    api_articles_id_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Article identifier */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Article resource */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/ld+json": components["schemas"]["Article.jsonld"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    api_articles_id_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Article identifier */
                id: string;
            };
            cookie?: never;
        };
        /** @description The updated Article resource */
        requestBody: {
            content: {
                "application/ld+json": components["schemas"]["Article.jsonld"];
            };
        };
        responses: {
            /** @description Article resource updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/ld+json": components["schemas"]["Article.jsonld"];
                };
            };
            /** @description Invalid input */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unprocessable entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    api_articles_id_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Article identifier */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Article resource deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    api_articles_id_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Article identifier */
                id: string;
            };
            cookie?: never;
        };
        /** @description The updated Article resource */
        requestBody: {
            content: {
                "application/merge-patch+json": components["schemas"]["Article"];
            };
        };
        responses: {
            /** @description Article resource updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/ld+json": components["schemas"]["Article.jsonld"];
                };
            };
            /** @description Invalid input */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unprocessable entity */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    api_logout_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User resource */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/ld+json": unknown;
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    api_me_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User resource */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/ld+json": components["schemas"]["User.jsonld"];
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    login_check_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description The login data */
        requestBody: {
            content: {
                "application/json": {
                    email: string;
                    password: string;
                };
            };
        };
        responses: {
            /** @description User token created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        readonly token: string;
                    };
                };
            };
        };
    };
}
