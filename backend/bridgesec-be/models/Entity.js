const mongoose = require('mongoose');

const entitySchema = new mongoose.Schema({
    entityId: { type: Number, required: true, unique: true },
    entityTypeId: { type: Number },
    createDate: { type: Date },
    storageType: { type: String },
    jsonId: { type: String },
    json: { type: mongoose.Schema.Types.Mixed }
}, { collection: 'Entity' });

const Entity = mongoose.model('Entity', entitySchema);

// Function to insert sample data into the collection
async function insertSampleData() {
    const sampleEntities = [
        {
            entityId: 1,
            entityTypeId: 4,
            createDate: new Date(),
            storageType: 'Object',
            jsonId: '0oa149154tAqi1gac1d7',
            json: {
                "id": "0oa149154tAqi1gac1d7",
                "orn": "orn:oktapreview:idp:00owegxmogmH6Jsgv1d6:apps:flow:0oa149154tAqi1gac1d7",
                "name": "flow",
                "label": "Okta Workflows OAuth",
                "status": "Active - 21",
                "lastUpdated": "2023-12-25T21:15:07.000Z",
                "created": "2023-12-20T17:13:55.000Z",
                "accessibility": {
                    "selfService": false,
                    "errorRedirectUrl": null,
                    "loginRedirectUrl": null
                },
                "visibility": {
                    "autoLaunch": false,
                    "autoSubmitToolbar": false,
                    "hide": {
                        "iOS": true,
                        "web": true
                    },
                    "appLinks": {}
                },
                "features": [],
                "signOnMode": "OPENID_CONNECT_21",
                "credentials": {
                    "userNameTemplate": {
                        "template": "${source.login}",
                        "type": "BUILT_IN"
                    },
                    "signing": {
                        "kid": "WX7D4XxzlX0ntQ26ywz3KFJTPoMWqDxruueQAdb1YA0"
                    }
                },
                "settings": {
                    "app": {
                        "redirectURI": "https://oauth.workflows.oktapreview.com/oauth/okta/cb",
                        "serviceDomain": "https://oauth.workflows.oktapreview.com"
                    },
                    "notifications": {
                        "vpn": {
                            "network": {
                                "connection": "DISABLED"
                            },
                            "message": null,
                            "helpUrl": null
                        }
                    },
                    "manualProvisioning": false,
                    "implicitAssignment": false,
                    "emOptInStatus": "NONE",
                    "notes": {
                        "admin": null,
                        "enduser": null
                    }
                },
                "_links": {
                    "uploadLogo": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa149154tAqi1gac1d7/logo",
                        "hints": {
                            "allow": [
                                "POST"
                            ]
                        }
                    },
                    "appLinks": [],
                    "profileEnrollment": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/policies/rstwegxrrtpbNkQLz1d6"
                    },
                    "policies": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa149154tAqi1gac1d7/policies",
                        "hints": {
                            "allow": [
                                "PUT"
                            ]
                        }
                    },
                    "groups": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa149154tAqi1gac1d7/groups"
                    },
                    "logo": [
                        {
                            "name": "medium",
                            "href": "https://op3static.oktacdn.com/assets/img/logos/okta-workflows.27df74eb53570679e5cc3a4b0f160602.png",
                            "type": "image/png"
                        }
                    ],
                    "clientCredentials": [
                        {
                            "name": "secrets",
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa149154tAqi1gac1d7/credentials/secrets"
                        }
                    ],
                    "accessPolicy": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/policies/rst1491552iM8nzUj1d7"
                    },
                    "users": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa149154tAqi1gac1d7/users"
                    },
                    "deactivate": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa149154tAqi1gac1d7/lifecycle/deactivate"
                    }
                }
            }
        },
        {
            entityId: 2,
            entityTypeId: 4,
            createDate: new Date(),
            storageType: 'Object',
            jsonId: '0oa16zi1hp5RLujBt1d7',
            json: {
                "id": "0oa16zi1hp5RLujBt1d7",
                "orn": "orn:oktapreview:idp:00owegxmogmH6Jsgv1d6:apps:oidc_client:0oa16zi1hp5RLujBt1d7",
                "name": "oidc_client",
                "label": "My Native App",
                "status": "Active - 20",
                "lastUpdated": "2023-12-12T21:14:58.000Z",
                "created": "2021-08-17T19:57:04.000Z",
                "accessibility": {
                    "selfService": false,
                    "errorRedirectUrl": null,
                    "loginRedirectUrl": null
                },
                "visibility": {
                    "autoLaunch": false,
                    "autoSubmitToolbar": false,
                    "hide": {
                        "iOS": true,
                        "web": true
                    },
                    "appLinks": {
                        "oidc_client_link": true
                    }
                },
                "features": [],
                "signOnMode": "OPENID_CONNECT",
                "credentials": {
                    "userNameTemplate": {
                        "template": "${source.login}",
                        "type": "BUILT_IN"
                    },
                    "signing": {
                        "kid": "WX7D4XxzlX0ntQ26ywz3KFJTPoMWqDxruueQAdb1YA0"
                    },
                    "oauthClient": {
                        "autoKeyRotation": true,
                        "client_id": "0oa16zi1hp5RLujBt1d7",
                        "token_endpoint_auth_method": "none",
                        "pkce_required": true
                    }
                },
                "settings": {
                    "app": {},
                    "notifications": {
                        "vpn": {
                            "network": {
                                "connection": "DISABLED"
                            },
                            "message": null,
                            "helpUrl": null
                        }
                    },
                    "manualProvisioning": false,
                    "implicitAssignment": false,
                    "emOptInStatus": "NONE",
                    "notes": {
                        "admin": null,
                        "enduser": null
                    },
                    "oauthClient": {
                        "client_uri": null,
                        "logo_uri": null,
                        "redirect_uris": [
                            "https://sivaji.glitch.me/oiepkce.html",
                            "http://localhost:8080/implicit/callback",
                            "http://local.sivaji.com:8080/login/callback",
                            "https://local.sivaji.com:3000/login/callback",
                            "https://sivaji.glitch.me/*.html"
                        ],
                        "post_logout_redirect_uris": [
                            "com.oktapreview.sivajioieciam:/",
                            "https://sivajiokta.glitch.me/oiepkce.html"
                        ],
                        "response_types": [
                            "code"
                        ],
                        "grant_types": [
                            "interaction_code",
                            "authorization_code",
                            "refresh_token"
                        ],
                        "application_type": "native",
                        "consent_method": "TRUSTED",
                        "issuer_mode": "DYNAMIC",
                        "refresh_token": {
                            "rotation_type": "ROTATE",
                            "leeway": 10
                        },
                        "idp_initiated_login": {
                            "mode": "DISABLED",
                            "default_scope": []
                        },
                        "wildcard_redirect": "SUBDOMAIN",
                        "dpop_bound_access_tokens": false
                    }
                },
                "_links": {
                    "uploadLogo": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa16zi1hp5RLujBt1d7/logo",
                        "hints": {
                            "allow": [
                                "POST"
                            ]
                        }
                    },
                    "appLinks": [
                        {
                            "name": "oidc_client_link",
                            "href": "https://sivajioieciam.oktapreview.com/home/oidc_client/0oa16zi1hp5RLujBt1d7/aln177a159h7Zf52X0g8",
                            "type": "text/html"
                        }
                    ],
                    "profileEnrollment": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/policies/rst18l4xs2BR4zSh71d7"
                    },
                    "policies": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa16zi1hp5RLujBt1d7/policies",
                        "hints": {
                            "allow": [
                                "PUT"
                            ]
                        }
                    },
                    "groups": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa16zi1hp5RLujBt1d7/groups"
                    },
                    "logo": [
                        {
                            "name": "medium",
                            "href": "https://op3static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                            "type": "image/png"
                        }
                    ],
                    "accessPolicy": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/policies/rst16zi1hvF4KVsMX1d7"
                    },
                    "users": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa16zi1hp5RLujBt1d7/users"
                    },
                    "deactivate": {
                        "href": "https://sivajioieciam.oktapreview.com/api/v1/apps/0oa16zi1hp5RLujBt1d7/lifecycle/deactivate"
                    }
                }
            }
        },
        {
            entityId: 3,
            entityTypeId: 36,
            createDate: new Date(),
            storageType: 'Array',
            jsonId: '',
            json: [
                {
                    "id": "00u1dllhn2aGTamJL1d7",
                    "status": "STAGED",
                    "created": "2021-09-16T14:33:18.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2021-09-16T14:33:18.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Test",
                        "lastName": "User4",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "test.user4@gmail.com",
                        "email": "bikram.nayak@okta.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u1dllhn2aGTamJL1d7"
                        }
                    }
                },
                {
                    "id": "00u2dhjvnxCYnHdky1d7",
                    "status": "STAGED",
                    "created": "2022-01-21T13:39:48.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2022-01-21T13:39:49.000Z",
                    "passwordChanged": "2022-01-21T13:39:49.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "Test@test1.com",
                        "email": "Test@test1.com"
                    },
                    "credentials": {
                        "password": {},
                        "recovery_question": {
                            "question": "Who's a major player in the cowboy scene?"
                        },
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2dhjvnxCYnHdky1d7"
                        }
                    }
                },
                {
                    "id": "00u2dhkc5hK6mhEel1d7",
                    "status": "STAGED",
                    "created": "2022-01-21T13:42:21.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2022-01-21T13:42:22.000Z",
                    "passwordChanged": "2022-01-21T13:42:22.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "Test1@test1.com",
                        "email": "Test1@test1.com"
                    },
                    "credentials": {
                        "password": {},
                        "recovery_question": {
                            "question": "Who's a major player in the cowboy scene?"
                        },
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2dhkc5hK6mhEel1d7"
                        }
                    }
                },
                {
                    "id": "00u2jm7t0jcXswPGQ1d7",
                    "status": "STAGED",
                    "created": "2022-02-11T17:10:11.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2022-02-11T17:10:25.000Z",
                    "passwordChanged": "2022-02-11T17:10:25.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "sivaji",
                        "lastName": "sabbineni",
                        "primaryPhone": "1234",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "test@gmail.com",
                        "email": "test@gmail.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2jm7t0jcXswPGQ1d7"
                        }
                    }
                },
                {
                    "id": "00u2nshou6nB0pQJs1d7",
                    "status": "STAGED",
                    "created": "2022-03-03T20:10:56.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2022-03-03T20:10:56.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Sivaji",
                        "lastName": "Test1",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "sivaji.test1@gmail.com",
                        "email": "sivaji.test1@sivaji.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2nshou6nB0pQJs1d7"
                        }
                    }
                },
                {
                    "id": "00u431u7g7GshG38r1d7",
                    "status": "STAGED",
                    "created": "2022-07-14T18:15:46.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2022-07-14T18:15:46.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "test",
                        "lastName": "dafdfa",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "fkajhfadj@test.com",
                        "email": "sivaji.sabbineni+1@okta.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u431u7g7GshG38r1d7"
                        }
                    }
                },
                {
                    "id": "00u432921rHULDLam1d7",
                    "status": "STAGED",
                    "created": "2022-07-14T19:31:46.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2022-07-14T19:33:20.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "tes",
                        "lastName": "tsfa",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "sdfdsass",
                        "email": "sivaji.sabbineni@okta.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u432921rHULDLam1d7"
                        }
                    }
                },
                {
                    "id": "00uec91x751N9ALgB1d7",
                    "status": "STAGED",
                    "created": "2024-05-01T19:32:17.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2024-05-01T19:32:17.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "test",
                        "lastName": "flow",
                        "mobilePhone": null,
                        "secondEmail": "",
                        "login": "tflow1@yopmail.com",
                        "email": "tflow1@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uec91x751N9ALgB1d7"
                        }
                    }
                },
                {
                    "id": "00uf1g9lolzBNgwuK1d7",
                    "status": "STAGED",
                    "created": "2024-06-06T22:20:28.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2024-06-06T22:21:57.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Training",
                        "lastName": "user1",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "training.user1@yopmail.com",
                        "email": "training.user1@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uf1g9lolzBNgwuK1d7"
                        }
                    }
                },
                {
                    "id": "00uf1g9lrxL0G4hwD1d7",
                    "status": "STAGED",
                    "created": "2024-06-06T22:20:30.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2024-06-06T22:21:58.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Training",
                        "lastName": "user3",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "training.user3@yopmail.com",
                        "email": "training.user3@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uf1g9lrxL0G4hwD1d7"
                        }
                    }
                },
                {
                    "id": "00uf1g9ltagCWi8j01d7",
                    "status": "STAGED",
                    "created": "2024-06-06T22:20:31.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2024-06-06T22:21:58.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Training",
                        "lastName": "user4",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "training.user4@yopmail.com",
                        "email": "training.user4@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uf1g9ltagCWi8j01d7"
                        }
                    }
                },
                {
                    "id": "00uf1gb7llwN1IC2Z1d7",
                    "status": "STAGED",
                    "created": "2024-06-06T22:25:11.000Z",
                    "activated": null,
                    "statusChanged": null,
                    "lastLogin": null,
                    "lastUpdated": "2024-06-06T22:25:11.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Training",
                        "lastName": "user4",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "training.user5@yopmail.com",
                        "email": "training.user5@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uf1gb7llwN1IC2Z1d7"
                        }
                    }
                },
                {
                    "id": "00uidjtlsnFKbuaz81d7",
                    "status": "STAGED",
                    "created": "2024-11-14T03:57:02.000Z",
                    "activated": null,
                    "statusChanged": "2024-11-14T03:57:03.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2024-11-14T03:57:03.000Z",
                    "passwordChanged": "2024-11-14T03:57:03.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "isaac@gmail.com",
                        "email": "isaac@gmail.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uidjtlsnFKbuaz81d7"
                        }
                    }
                },
                {
                    "id": "00u2dibnbkmF7BcQd1d7",
                    "status": "PROVISIONED",
                    "created": "2022-01-21T14:56:00.000Z",
                    "activated": "2022-01-21T14:56:01.000Z",
                    "statusChanged": "2022-01-21T14:56:01.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2022-01-21T14:56:01.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "Test7@test1.com",
                        "email": "Test7@test1.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2dibnbkmF7BcQd1d7"
                        }
                    }
                },
                {
                    "id": "00uf1du1uvnRoQz9V1d7",
                    "status": "PROVISIONED",
                    "created": "2024-06-06T21:35:08.000Z",
                    "activated": "2024-06-06T21:35:09.000Z",
                    "statusChanged": "2024-06-06T21:35:09.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2024-06-06T21:35:44.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "test",
                        "lastName": "user100",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "test.user200@yopmail.com",
                        "email": "test.user200@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uf1du1uvnRoQz9V1d7"
                        }
                    }
                },
                {
                    "id": "00uf1g9lqh88vgr2Q1d7",
                    "status": "PROVISIONED",
                    "created": "2024-06-06T22:20:29.000Z",
                    "activated": "2024-06-06T22:23:18.000Z",
                    "statusChanged": "2024-06-06T22:23:18.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2024-06-06T22:23:18.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Training",
                        "lastName": "user2",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "training.user2@yopmail.com",
                        "email": "training.user2@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00uf1g9lqh88vgr2Q1d7"
                        }
                    }
                },
                {
                    "id": "00u17o6cwiemOIyqc1d7",
                    "status": "ACTIVE - 20",
                    "created": "2021-08-19T15:00:29.000Z",
                    "activated": "2021-08-19T15:00:33.000Z",
                    "statusChanged": "2021-08-30T19:13:58.000Z",
                    "lastLogin": "2021-08-19T15:02:30.000Z",
                    "lastUpdated": "2021-08-30T19:13:58.000Z",
                    "passwordChanged": "2021-08-19T15:00:29.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "mfa",
                        "lastName": "user",
                        "mobilePhone": null,
                        "secondEmail": "",
                        "login": "mfa.user@okta.com",
                        "email": "mfa.user@okta.com"
                    },
                    "credentials": {
                        "password": {},
                        "recovery_question": {
                            "question": "What is the food you least liked as a child?"
                        },
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u17o6cwiemOIyqc1d7"
                        }
                    }
                },
                {
                    "id": "00u18l5zl2m8h3tnx1d7",
                    "status": "ACTIVE - 20",
                    "created": "2021-08-24T16:02:01.000Z",
                    "activated": "2021-08-24T16:04:32.000Z",
                    "statusChanged": "2024-05-09T17:30:44.000Z",
                    "lastLogin": "2024-09-29T02:27:48.000Z",
                    "lastUpdated": "2024-05-09T17:30:44.000Z",
                    "passwordChanged": "2024-05-09T17:30:44.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Balasubramanyam",
                        "lastName": "Ganaparthi",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "bala.ganaparthi@okta.com",
                        "email": "bala.ganaparthi@okta.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u18l5zl2m8h3tnx1d7"
                        }
                    }
                },
                {
                    "id": "00u1drto4qBAHEdAt1d7",
                    "status": "ACTIVE - 20",
                    "created": "2021-09-17T18:00:43.000Z",
                    "activated": "2021-09-17T18:04:10.000Z",
                    "statusChanged": "2021-09-17T18:04:10.000Z",
                    "lastLogin": "2021-09-17T18:04:10.000Z",
                    "lastUpdated": "2021-09-17T18:04:10.000Z",
                    "passwordChanged": "2021-09-17T18:01:53.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Test",
                        "lastName": "Sn",
                        "primaryPhone": "124",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "sivaji@yopmail.com",
                        "email": "sivaji@yopmail.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u1drto4qBAHEdAt1d7"
                        }
                    }
                },
                {
                    "id": "00u1qks3xjnjzr22p1d7",
                    "status": "ACTIVE - 20",
                    "created": "2021-11-01T19:28:10.000Z",
                    "activated": "2021-11-01T19:28:11.000Z",
                    "statusChanged": "2021-11-01T19:28:11.000Z",
                    "lastLogin": "2021-11-01T19:28:11.000Z",
                    "lastUpdated": "2023-01-24T18:40:31.000Z",
                    "passwordChanged": null,
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "IDP",
                        "lastName": "Test",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "idp.test@yopmail.com",
                        "email": "idp.test@yopmail.com"
                    },
                    "credentials": {
                        "provider": {
                            "type": "FEDERATION",
                            "name": "FEDERATION"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u1qks3xjnjzr22p1d7"
                        }
                    }
                },
                {
                    "id": "00u1tiryu34BXNf5Q1d7",
                    "status": "ACTIVE - 20",
                    "created": "2021-11-07T22:03:37.000Z",
                    "activated": "2021-11-07T22:03:37.000Z",
                    "statusChanged": "2021-11-07T22:03:37.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2022-02-22T18:04:40.000Z",
                    "passwordChanged": "2021-11-07T22:03:37.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "postalAddress": "dfgdfgdfg",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "isaac101@yahoo.com",
                        "email": "isaac101@yahoo.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u1tiryu34BXNf5Q1d7"
                        }
                    }
                },
                {
                    "id": "00u2dhl0rhHfxYtS61d7",
                    "status": "ACTIVE - 20",
                    "created": "2022-01-21T13:44:21.000Z",
                    "activated": "2022-01-21T13:44:21.000Z",
                    "statusChanged": "2022-01-21T13:44:21.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2022-01-21T13:44:21.000Z",
                    "passwordChanged": "2022-01-21T13:44:21.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "Test2@test1.com",
                        "email": "Test2@test1.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2dhl0rhHfxYtS61d7"
                        }
                    }
                },
                {
                    "id": "00u2di6usiVSNgOFN1d7",
                    "status": "ACTIVE - 20",
                    "created": "2022-01-21T14:47:10.000Z",
                    "activated": "2022-01-21T14:47:11.000Z",
                    "statusChanged": "2022-01-21T14:47:11.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2022-01-21T14:47:11.000Z",
                    "passwordChanged": "2022-01-21T14:47:11.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "Test3@test1.com",
                        "email": "Test3@test1.com"
                    },
                    "credentials": {
                        "password": {},
                        "recovery_question": {
                            "question": "Who's a major player in the cowboy scene?"
                        },
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2di6usiVSNgOFN1d7"
                        }
                    }
                },
                {
                    "id": "00u2di7sa8LRhoJhb1d7",
                    "status": "ACTIVE - 20",
                    "created": "2022-01-21T14:47:44.000Z",
                    "activated": "2022-01-21T14:47:44.000Z",
                    "statusChanged": "2022-01-21T14:47:44.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2022-01-21T14:47:44.000Z",
                    "passwordChanged": "2022-01-21T14:47:44.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "Test4@test1.com",
                        "email": "Test4@test1.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2di7sa8LRhoJhb1d7"
                        }
                    }
                },
                {
                    "id": "00u2di9bng4MVZT4Z1d7",
                    "status": "ACTIVE - 20",
                    "created": "2022-01-21T14:49:52.000Z",
                    "activated": "2022-01-21T14:49:52.000Z",
                    "statusChanged": "2022-01-21T14:49:52.000Z",
                    "lastLogin": null,
                    "lastUpdated": "2022-01-21T14:49:52.000Z",
                    "passwordChanged": "2022-01-21T14:49:52.000Z",
                    "type": {
                        "id": "otywegxnakEGO54Yz1d6"
                    },
                    "profile": {
                        "firstName": "Isaac",
                        "lastName": "Brock",
                        "mobilePhone": null,
                        "secondEmail": null,
                        "login": "Test5@test1.com",
                        "email": "Test5@test1.com"
                    },
                    "credentials": {
                        "password": {},
                        "provider": {
                            "type": "OKTA",
                            "name": "OKTA"
                        }
                    },
                    "_links": {
                        "self": {
                            "href": "https://sivajioieciam.oktapreview.com/api/v1/users/00u2di9bng4MVZT4Z1d7"
                        }
                    }
                }
            ]
        }
    ];

    // Insert sample data
    await Entity.insertMany(sampleEntities);
    console.log('Sample data added to Entity collection');
}

// Function to initialize the collection and insert sample data if needed
async function initializeEntityCollection() {
    const EntityCollectionExists = await mongoose.connection.db.listCollections({ name: 'Entity' }).toArray();
    if (EntityCollectionExists.length === 0) {
        await mongoose.connection.db.createCollection('Entity');
        console.log('Entity Collection created');
        
        // Call insertSampleData to add data to the collection
        
    } else {
        console.log('Entity Collection already exists');
    }
    // await insertSampleData();
}

module.exports = { Entity, initializeEntityCollection }; // Export both Entity and the function
