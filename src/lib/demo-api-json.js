import React from 'react'

export const jsonApiData = () => {
	return {
	  "coach": {
	    "id": 1,
	    "firstName": "Moshe",
	    "lastName": "Schoen",
	    "phone": "1-931-197-0759 x361",
	    "email": "estefania.steuber@yahoo.com",
	    "createdAt": "2019-12-05T00:54:49.000Z",
	    "updatedAt": "2019-12-05T00:54:49.000Z"
	  },
	  "teams": [
	    {
	      "id": 1,
	      "name": "Yankees",
	      "games": [
	        {
	          "id": 1,
	          "name": "Subway Series",
	          "teams": [
	            {
	              "id": 1,
	              "name": "Yankees",
	              "players": [
	                {
	                  "id": 1,
	                  "firstName": "Nicola",
	                  "lastName": "Keebler",
	                  "jerseyNumber": 38,
	                  "position": "1B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 1,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "P",
	                      "baseValue": "K",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 3,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 10,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "RF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 20,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "LF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 30,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "LF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 2,
	                  "firstName": "Martin",
	                  "lastName": "Zieme",
	                  "jerseyNumber": 1,
	                  "position": "2B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 2,
	                      "playerId": 2,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "LF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 11,
	                      "playerId": 2,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "CF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 31,
	                      "playerId": 2,
	                      "runsBattedIn": 1,
	                      "basePosition": 3,
	                      "fieldPosition": "CF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 2,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 3,
	                  "firstName": "Shanie",
	                  "lastName": "Haley",
	                  "jerseyNumber": 4,
	                  "position": "3B",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 3,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "CF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 12,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "3B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 32,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    },
	                    {
	                      "id": 33,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "P",
	                      "baseValue": "K",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 3,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 4,
	                  "firstName": "Veronica",
	                  "lastName": "Greenholt",
	                  "jerseyNumber": 7,
	                  "position": "SS",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 4,
	                      "playerId": 4,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "1B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 13,
	                      "playerId": 4,
	                      "runsBattedIn": 2,
	                      "basePosition": 4,
	                      "fieldPosition": "LF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 34,
	                      "playerId": 4,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "1B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 5,
	                  "firstName": "Lenore",
	                  "lastName": "Boehm",
	                  "jerseyNumber": 9,
	                  "position": "LF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 5,
	                      "playerId": 5,
	                      "runsBattedIn": 0,
	                      "basePosition": 2,
	                      "fieldPosition": "1B",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 14,
	                      "playerId": 5,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "RF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 15,
	                      "playerId": 5,
	                      "runsBattedIn": 1,
	                      "basePosition": 1,
	                      "fieldPosition": "1B",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 35,
	                      "playerId": 5,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "3B",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 6,
	                  "firstName": "Jess",
	                  "lastName": "Hahn",
	                  "jerseyNumber": 3,
	                  "position": "RF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 6,
	                      "playerId": 6,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "RF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 16,
	                      "playerId": 6,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 36,
	                      "playerId": 6,
	                      "runsBattedIn": 1,
	                      "basePosition": 3,
	                      "fieldPosition": "CF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 0,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 7,
	                  "firstName": "Rosendo",
	                  "lastName": "Baumbach",
	                  "jerseyNumber": 9,
	                  "position": "CF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 7,
	                      "playerId": 7,
	                      "runsBattedIn": 0,
	                      "basePosition": 1,
	                      "fieldPosition": "CF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 17,
	                      "playerId": 7,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 37,
	                      "playerId": 7,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 1,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 8,
	                  "firstName": "Wilma",
	                  "lastName": "Altenwerth",
	                  "jerseyNumber": 8,
	                  "position": "C",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 8,
	                      "playerId": 8,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "3B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 18,
	                      "playerId": 8,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "CF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 38,
	                      "playerId": 8,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 0,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 9,
	                  "firstName": "Obie",
	                  "lastName": "Schimmel",
	                  "jerseyNumber": 5,
	                  "position": "P",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 9,
	                      "playerId": 9,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 19,
	                      "playerId": 9,
	                      "runsBattedIn": 0,
	                      "basePosition": 1,
	                      "fieldPosition": "LF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 39,
	                      "playerId": 9,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 0,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 2,
	              "name": "Mets",
	              "players": [
	                {
	                  "id": 10,
	                  "firstName": "Kaylah",
	                  "lastName": "Schmeler",
	                  "jerseyNumber": 1,
	                  "position": "1B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 21,
	                      "playerId": 10,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "C",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 11,
	                  "firstName": "Edwardo",
	                  "lastName": "Feil",
	                  "jerseyNumber": 3,
	                  "position": "2B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 22,
	                      "playerId": 11,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "LF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 12,
	                  "firstName": "Laverna",
	                  "lastName": "Swaniawski",
	                  "jerseyNumber": 8,
	                  "position": "3B",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 23,
	                      "playerId": 12,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 13,
	                  "firstName": "Vilma",
	                  "lastName": "Jaskolski",
	                  "jerseyNumber": 1,
	                  "position": "SS",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 24,
	                      "playerId": 13,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "CF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 14,
	                  "firstName": "Ida",
	                  "lastName": "Schaefer",
	                  "jerseyNumber": 1,
	                  "position": "LF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 25,
	                      "playerId": 14,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "RF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 15,
	                  "firstName": "Darron",
	                  "lastName": "Breitenberg",
	                  "jerseyNumber": 6,
	                  "position": "RF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 26,
	                      "playerId": 15,
	                      "runsBattedIn": 2,
	                      "basePosition": 3,
	                      "fieldPosition": "CF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 16,
	                  "firstName": "Anita",
	                  "lastName": "Kreiger",
	                  "jerseyNumber": 4,
	                  "position": "CF",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 27,
	                      "playerId": 16,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "3B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 17,
	                  "firstName": "Mustafa",
	                  "lastName": "Langworth",
	                  "jerseyNumber": 9,
	                  "position": "C",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 28,
	                      "playerId": 17,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "1B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 18,
	                  "firstName": "Delphia",
	                  "lastName": "Christiansen",
	                  "jerseyNumber": 4,
	                  "position": "P",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 29,
	                      "playerId": 18,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "innings": [
	            {
	              "id": 1,
	              "atBats": [
	                {
	                  "id": 1,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "P",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 3,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 2,
	                  "playerId": 2,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 3,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "CF",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 4,
	                  "playerId": 4,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 21,
	                  "playerId": 10,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "C",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 22,
	                  "playerId": 11,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "LF",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 23,
	                  "playerId": 12,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "inningNumber": 1,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 2,
	              "atBats": [
	                {
	                  "id": 5,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 2,
	                  "fieldPosition": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 6,
	                  "playerId": 6,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "RF",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 7,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 1,
	                  "fieldPosition": "CF",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 8,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 9,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 24,
	                  "playerId": 13,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "CF",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 25,
	                  "playerId": 14,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "RF",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 26,
	                  "playerId": 15,
	                  "runsBattedIn": 2,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 27,
	                  "playerId": 16,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 28,
	                  "playerId": 17,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 29,
	                  "playerId": 18,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "inningNumber": 2,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 3,
	              "atBats": [
	                {
	                  "id": 10,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "RF",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 11,
	                  "playerId": 2,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "CF",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 12,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 13,
	                  "playerId": 4,
	                  "runsBattedIn": 2,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 14,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "RF",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 15,
	                  "playerId": 5,
	                  "runsBattedIn": 1,
	                  "basePosition": 1,
	                  "fieldPosition": "1B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 16,
	                  "playerId": 6,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "inningNumber": 3,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 4,
	              "atBats": [
	                {
	                  "id": 17,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 18,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "CF",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 19,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 1,
	                  "fieldPosition": "LF",
	                  "isHit": true,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 20,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "LF",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "inningNumber": 4,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 5,
	              "atBats": [
	                
	              ],
	              "inningNumber": 5,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 6,
	              "atBats": [
	                
	              ],
	              "inningNumber": 6,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 7,
	              "atBats": [
	                
	              ],
	              "inningNumber": 7,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 8,
	              "atBats": [
	                
	              ],
	              "inningNumber": 8,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 9,
	              "atBats": [
	                
	              ],
	              "inningNumber": 9,
	              "gameId": {
	                "id": 1,
	                "name": "Subway Series",
	                "location": "Yankee Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 2,
	          "name": "Rivalry Game",
	          "teams": [
	            {
	              "id": 1,
	              "name": "Yankees",
	              "players": [
	                {
	                  "id": 1,
	                  "firstName": "Nicola",
	                  "lastName": "Keebler",
	                  "jerseyNumber": 38,
	                  "position": "1B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 1,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "P",
	                      "baseValue": "K",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 3,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 10,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "RF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 20,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "LF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 30,
	                      "playerId": 1,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "LF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 2,
	                  "firstName": "Martin",
	                  "lastName": "Zieme",
	                  "jerseyNumber": 1,
	                  "position": "2B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 2,
	                      "playerId": 2,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "LF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 11,
	                      "playerId": 2,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "CF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 31,
	                      "playerId": 2,
	                      "runsBattedIn": 1,
	                      "basePosition": 3,
	                      "fieldPosition": "CF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 2,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 3,
	                  "firstName": "Shanie",
	                  "lastName": "Haley",
	                  "jerseyNumber": 4,
	                  "position": "3B",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 3,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "CF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 12,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "3B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 32,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    },
	                    {
	                      "id": 33,
	                      "playerId": 3,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "P",
	                      "baseValue": "K",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 3,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 4,
	                  "firstName": "Veronica",
	                  "lastName": "Greenholt",
	                  "jerseyNumber": 7,
	                  "position": "SS",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 4,
	                      "playerId": 4,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "1B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 13,
	                      "playerId": 4,
	                      "runsBattedIn": 2,
	                      "basePosition": 4,
	                      "fieldPosition": "LF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 34,
	                      "playerId": 4,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "1B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 2,
	                      "balls": 3,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 5,
	                  "firstName": "Lenore",
	                  "lastName": "Boehm",
	                  "jerseyNumber": 9,
	                  "position": "LF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 5,
	                      "playerId": 5,
	                      "runsBattedIn": 0,
	                      "basePosition": 2,
	                      "fieldPosition": "1B",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 14,
	                      "playerId": 5,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "RF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 15,
	                      "playerId": 5,
	                      "runsBattedIn": 1,
	                      "basePosition": 1,
	                      "fieldPosition": "1B",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 35,
	                      "playerId": 5,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "3B",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 6,
	                  "firstName": "Jess",
	                  "lastName": "Hahn",
	                  "jerseyNumber": 3,
	                  "position": "RF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 6,
	                      "playerId": 6,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "RF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 16,
	                      "playerId": 6,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 3,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 36,
	                      "playerId": 6,
	                      "runsBattedIn": 1,
	                      "basePosition": 3,
	                      "fieldPosition": "CF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 0,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 7,
	                  "firstName": "Rosendo",
	                  "lastName": "Baumbach",
	                  "jerseyNumber": 9,
	                  "position": "CF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 7,
	                      "playerId": 7,
	                      "runsBattedIn": 0,
	                      "basePosition": 1,
	                      "fieldPosition": "CF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 17,
	                      "playerId": 7,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 37,
	                      "playerId": 7,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 1,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 8,
	                  "firstName": "Wilma",
	                  "lastName": "Altenwerth",
	                  "jerseyNumber": 8,
	                  "position": "C",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 8,
	                      "playerId": 8,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "3B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 3,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 18,
	                      "playerId": 8,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "CF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 38,
	                      "playerId": 8,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 0,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 9,
	                  "firstName": "Obie",
	                  "lastName": "Schimmel",
	                  "jerseyNumber": 5,
	                  "position": "P",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 9,
	                      "playerId": 9,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 19,
	                      "playerId": 9,
	                      "runsBattedIn": 0,
	                      "basePosition": 1,
	                      "fieldPosition": "LF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 4,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    },
	                    {
	                      "id": 39,
	                      "playerId": 9,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "2B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 2,
	                      "balls": 0,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 2,
	              "name": "Mets",
	              "players": [
	                {
	                  "id": 10,
	                  "firstName": "Kaylah",
	                  "lastName": "Schmeler",
	                  "jerseyNumber": 1,
	                  "position": "1B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 21,
	                      "playerId": 10,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "C",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 11,
	                  "firstName": "Edwardo",
	                  "lastName": "Feil",
	                  "jerseyNumber": 3,
	                  "position": "2B",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 22,
	                      "playerId": 11,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "LF",
	                      "baseValue": "F.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 1,
	                      "strikes": 1,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 12,
	                  "firstName": "Laverna",
	                  "lastName": "Swaniawski",
	                  "jerseyNumber": 8,
	                  "position": "3B",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 23,
	                      "playerId": 12,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 1,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:49.000Z",
	                      "updatedAt": "2019-12-05T00:54:49.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 13,
	                  "firstName": "Vilma",
	                  "lastName": "Jaskolski",
	                  "jerseyNumber": 1,
	                  "position": "SS",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 24,
	                      "playerId": 13,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "CF",
	                      "baseValue": "1B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 14,
	                  "firstName": "Ida",
	                  "lastName": "Schaefer",
	                  "jerseyNumber": 1,
	                  "position": "LF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 25,
	                      "playerId": 14,
	                      "runsBattedIn": 0,
	                      "basePosition": 4,
	                      "fieldPosition": "RF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 15,
	                  "firstName": "Darron",
	                  "lastName": "Breitenberg",
	                  "jerseyNumber": 6,
	                  "position": "RF",
	                  "age": 16,
	                  "atBats": [
	                    {
	                      "id": 26,
	                      "playerId": 15,
	                      "runsBattedIn": 2,
	                      "basePosition": 3,
	                      "fieldPosition": "CF",
	                      "baseValue": "2B",
	                      "isHit": true,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 0,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 16,
	                  "firstName": "Anita",
	                  "lastName": "Kreiger",
	                  "jerseyNumber": 4,
	                  "position": "CF",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 27,
	                      "playerId": 16,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "3B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 2,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 17,
	                  "firstName": "Mustafa",
	                  "lastName": "Langworth",
	                  "jerseyNumber": 9,
	                  "position": "C",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 28,
	                      "playerId": 17,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "1B",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 18,
	                  "firstName": "Delphia",
	                  "lastName": "Christiansen",
	                  "jerseyNumber": 4,
	                  "position": "P",
	                  "age": 15,
	                  "atBats": [
	                    {
	                      "id": 29,
	                      "playerId": 18,
	                      "runsBattedIn": 0,
	                      "basePosition": 0,
	                      "fieldPosition": "SS",
	                      "baseValue": "G.O.",
	                      "isHit": false,
	                      "inningNumber": 2,
	                      "gameId": 1,
	                      "balls": 0,
	                      "strikes": 2,
	                      "createdAt": "2019-12-05T00:54:50.000Z",
	                      "updatedAt": "2019-12-05T00:54:50.000Z"
	                    }
	                  ],
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "innings": [
	            {
	              "id": 10,
	              "atBats": [
	                {
	                  "id": 30,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 31,
	                  "playerId": 2,
	                  "runsBattedIn": 1,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 2,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 32,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 33,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "P",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 3,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 34,
	                  "playerId": 4,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "inningNumber": 1,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 11,
	              "atBats": [
	                {
	                  "id": 35,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "3B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 36,
	                  "playerId": 6,
	                  "runsBattedIn": 1,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 37,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 38,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 39,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "inningNumber": 2,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 12,
	              "atBats": [
	                
	              ],
	              "inningNumber": 3,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 13,
	              "atBats": [
	                
	              ],
	              "inningNumber": 4,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 14,
	              "atBats": [
	                
	              ],
	              "inningNumber": 5,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 15,
	              "atBats": [
	                
	              ],
	              "inningNumber": 6,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 16,
	              "atBats": [
	                
	              ],
	              "inningNumber": 7,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 17,
	              "atBats": [
	                
	              ],
	              "inningNumber": 8,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 18,
	              "atBats": [
	                
	              ],
	              "inningNumber": 9,
	              "gameId": {
	                "id": 2,
	                "name": "Rivalry Game",
	                "location": "Fenway Stadium",
	                "created_at": "2019-12-05T00:54:49.000Z",
	                "updated_at": "2019-12-05T00:54:49.000Z"
	              },
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        }
	      ],
	      "players": [
	        {
	          "id": 1,
	          "firstName": "Nicola",
	          "lastName": "Keebler",
	          "jerseyNumber": 38,
	          "position": "1B",
	          "age": 16,
	          "atBats": [
	            {
	              "id": 1,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "P",
	              "baseValue": "K",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 3,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 10,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "RF",
	              "baseValue": "1B",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 20,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "LF",
	              "baseValue": "F.O.",
	              "isHit": false,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 30,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "LF",
	              "baseValue": "2B",
	              "isHit": true,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 2,
	          "firstName": "Martin",
	          "lastName": "Zieme",
	          "jerseyNumber": 1,
	          "position": "2B",
	          "age": 16,
	          "atBats": [
	            {
	              "id": 2,
	              "playerId": 2,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "LF",
	              "baseValue": "2B",
	              "isHit": true,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 11,
	              "playerId": 2,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "CF",
	              "baseValue": "1B",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 31,
	              "playerId": 2,
	              "runsBattedIn": 1,
	              "basePosition": 3,
	              "fieldPosition": "CF",
	              "baseValue": "2B",
	              "isHit": true,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 2,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 3,
	          "firstName": "Shanie",
	          "lastName": "Haley",
	          "jerseyNumber": 4,
	          "position": "3B",
	          "age": 15,
	          "atBats": [
	            {
	              "id": 3,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "CF",
	              "baseValue": "F.O.",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 12,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "3B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 32,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 33,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "P",
	              "baseValue": "K",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 3,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 4,
	          "firstName": "Veronica",
	          "lastName": "Greenholt",
	          "jerseyNumber": 7,
	          "position": "SS",
	          "age": 15,
	          "atBats": [
	            {
	              "id": 4,
	              "playerId": 4,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "1B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 13,
	              "playerId": 4,
	              "runsBattedIn": 2,
	              "basePosition": 4,
	              "fieldPosition": "LF",
	              "baseValue": "2B",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 34,
	              "playerId": 4,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "1B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 5,
	          "firstName": "Lenore",
	          "lastName": "Boehm",
	          "jerseyNumber": 9,
	          "position": "LF",
	          "age": 16,
	          "atBats": [
	            {
	              "id": 5,
	              "playerId": 5,
	              "runsBattedIn": 0,
	              "basePosition": 2,
	              "fieldPosition": "1B",
	              "baseValue": "1B",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 14,
	              "playerId": 5,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "RF",
	              "baseValue": "F.O.",
	              "isHit": false,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 15,
	              "playerId": 5,
	              "runsBattedIn": 1,
	              "basePosition": 1,
	              "fieldPosition": "1B",
	              "baseValue": "1B",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 35,
	              "playerId": 5,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "3B",
	              "baseValue": "1B",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 6,
	          "firstName": "Jess",
	          "lastName": "Hahn",
	          "jerseyNumber": 3,
	          "position": "RF",
	          "age": 16,
	          "atBats": [
	            {
	              "id": 6,
	              "playerId": 6,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "RF",
	              "baseValue": "F.O.",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 16,
	              "playerId": 6,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "SS",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 36,
	              "playerId": 6,
	              "runsBattedIn": 1,
	              "basePosition": 3,
	              "fieldPosition": "CF",
	              "baseValue": "2B",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 0,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 7,
	          "firstName": "Rosendo",
	          "lastName": "Baumbach",
	          "jerseyNumber": 9,
	          "position": "CF",
	          "age": 16,
	          "atBats": [
	            {
	              "id": 7,
	              "playerId": 7,
	              "runsBattedIn": 0,
	              "basePosition": 1,
	              "fieldPosition": "CF",
	              "baseValue": "1B",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 17,
	              "playerId": 7,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 37,
	              "playerId": 7,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "SS",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 1,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 8,
	          "firstName": "Wilma",
	          "lastName": "Altenwerth",
	          "jerseyNumber": 8,
	          "position": "C",
	          "age": 16,
	          "atBats": [
	            {
	              "id": 8,
	              "playerId": 8,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "3B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 18,
	              "playerId": 8,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "CF",
	              "baseValue": "F.O.",
	              "isHit": false,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 38,
	              "playerId": 8,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 0,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 9,
	          "firstName": "Obie",
	          "lastName": "Schimmel",
	          "jerseyNumber": 5,
	          "position": "P",
	          "age": 16,
	          "atBats": [
	            {
	              "id": 9,
	              "playerId": 9,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 19,
	              "playerId": 9,
	              "runsBattedIn": 0,
	              "basePosition": 1,
	              "fieldPosition": "LF",
	              "baseValue": "1B",
	              "isHit": true,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 39,
	              "playerId": 9,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "baseValue": "G.O.",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 0,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    }
	  ],
	  "players": [
	    {
	      "id": 1,
	      "firstName": "Nicola",
	      "lastName": "Keebler",
	      "jerseyNumber": 38,
	      "position": "1B",
	      "age": 16,
	      "atBats": [
	        {
	          "id": 1,
	          "playerId": 1,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "P",
	          "baseValue": "K",
	          "isHit": false,
	          "inningNumber": 1,
	          "gameId": 1,
	          "balls": 2,
	          "strikes": 3,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 10,
	          "playerId": 1,
	          "runsBattedIn": 0,
	          "basePosition": 4,
	          "fieldPosition": "RF",
	          "baseValue": "1B",
	          "isHit": true,
	          "inningNumber": 3,
	          "gameId": 1,
	          "balls": 0,
	          "strikes": 2,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 20,
	          "playerId": 1,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "LF",
	          "baseValue": "F.O.",
	          "isHit": false,
	          "inningNumber": 4,
	          "gameId": 1,
	          "balls": 3,
	          "strikes": 2,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 30,
	          "playerId": 1,
	          "runsBattedIn": 0,
	          "basePosition": 4,
	          "fieldPosition": "LF",
	          "baseValue": "2B",
	          "isHit": true,
	          "inningNumber": 1,
	          "gameId": 2,
	          "balls": 3,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 2,
	      "firstName": "Martin",
	      "lastName": "Zieme",
	      "jerseyNumber": 1,
	      "position": "2B",
	      "age": 16,
	      "atBats": [
	        {
	          "id": 2,
	          "playerId": 2,
	          "runsBattedIn": 0,
	          "basePosition": 4,
	          "fieldPosition": "LF",
	          "baseValue": "2B",
	          "isHit": true,
	          "inningNumber": 1,
	          "gameId": 1,
	          "balls": 2,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 11,
	          "playerId": 2,
	          "runsBattedIn": 0,
	          "basePosition": 4,
	          "fieldPosition": "CF",
	          "baseValue": "1B",
	          "isHit": true,
	          "inningNumber": 3,
	          "gameId": 1,
	          "balls": 2,
	          "strikes": 2,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 31,
	          "playerId": 2,
	          "runsBattedIn": 1,
	          "basePosition": 3,
	          "fieldPosition": "CF",
	          "baseValue": "2B",
	          "isHit": true,
	          "inningNumber": 1,
	          "gameId": 2,
	          "balls": 2,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 3,
	      "firstName": "Shanie",
	      "lastName": "Haley",
	      "jerseyNumber": 4,
	      "position": "3B",
	      "age": 15,
	      "atBats": [
	        {
	          "id": 3,
	          "playerId": 3,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "CF",
	          "baseValue": "F.O.",
	          "isHit": false,
	          "inningNumber": 1,
	          "gameId": 1,
	          "balls": 3,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 12,
	          "playerId": 3,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "3B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 3,
	          "gameId": 1,
	          "balls": 3,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 32,
	          "playerId": 3,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "2B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 1,
	          "gameId": 2,
	          "balls": 3,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        },
	        {
	          "id": 33,
	          "playerId": 3,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "P",
	          "baseValue": "K",
	          "isHit": false,
	          "inningNumber": 1,
	          "gameId": 2,
	          "balls": 3,
	          "strikes": 3,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 4,
	      "firstName": "Veronica",
	      "lastName": "Greenholt",
	      "jerseyNumber": 7,
	      "position": "SS",
	      "age": 15,
	      "atBats": [
	        {
	          "id": 4,
	          "playerId": 4,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "1B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 1,
	          "gameId": 1,
	          "balls": 3,
	          "strikes": 2,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 13,
	          "playerId": 4,
	          "runsBattedIn": 2,
	          "basePosition": 4,
	          "fieldPosition": "LF",
	          "baseValue": "2B",
	          "isHit": true,
	          "inningNumber": 3,
	          "gameId": 1,
	          "balls": 1,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 34,
	          "playerId": 4,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "1B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 1,
	          "gameId": 2,
	          "balls": 3,
	          "strikes": 2,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 5,
	      "firstName": "Lenore",
	      "lastName": "Boehm",
	      "jerseyNumber": 9,
	      "position": "LF",
	      "age": 16,
	      "atBats": [
	        {
	          "id": 5,
	          "playerId": 5,
	          "runsBattedIn": 0,
	          "basePosition": 2,
	          "fieldPosition": "1B",
	          "baseValue": "1B",
	          "isHit": true,
	          "inningNumber": 2,
	          "gameId": 1,
	          "balls": 1,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 14,
	          "playerId": 5,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "RF",
	          "baseValue": "F.O.",
	          "isHit": false,
	          "inningNumber": 3,
	          "gameId": 1,
	          "balls": 1,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 15,
	          "playerId": 5,
	          "runsBattedIn": 1,
	          "basePosition": 1,
	          "fieldPosition": "1B",
	          "baseValue": "1B",
	          "isHit": true,
	          "inningNumber": 3,
	          "gameId": 1,
	          "balls": 3,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 35,
	          "playerId": 5,
	          "runsBattedIn": 0,
	          "basePosition": 4,
	          "fieldPosition": "3B",
	          "baseValue": "1B",
	          "isHit": true,
	          "inningNumber": 2,
	          "gameId": 2,
	          "balls": 1,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 6,
	      "firstName": "Jess",
	      "lastName": "Hahn",
	      "jerseyNumber": 3,
	      "position": "RF",
	      "age": 16,
	      "atBats": [
	        {
	          "id": 6,
	          "playerId": 6,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "RF",
	          "baseValue": "F.O.",
	          "isHit": false,
	          "inningNumber": 2,
	          "gameId": 1,
	          "balls": 1,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 16,
	          "playerId": 6,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "SS",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 3,
	          "gameId": 1,
	          "balls": 1,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 36,
	          "playerId": 6,
	          "runsBattedIn": 1,
	          "basePosition": 3,
	          "fieldPosition": "CF",
	          "baseValue": "2B",
	          "isHit": true,
	          "inningNumber": 2,
	          "gameId": 2,
	          "balls": 0,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 7,
	      "firstName": "Rosendo",
	      "lastName": "Baumbach",
	      "jerseyNumber": 9,
	      "position": "CF",
	      "age": 16,
	      "atBats": [
	        {
	          "id": 7,
	          "playerId": 7,
	          "runsBattedIn": 0,
	          "basePosition": 1,
	          "fieldPosition": "CF",
	          "baseValue": "1B",
	          "isHit": true,
	          "inningNumber": 2,
	          "gameId": 1,
	          "balls": 0,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 17,
	          "playerId": 7,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "2B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 4,
	          "gameId": 1,
	          "balls": 1,
	          "strikes": 2,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 37,
	          "playerId": 7,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "SS",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 2,
	          "gameId": 2,
	          "balls": 1,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 8,
	      "firstName": "Wilma",
	      "lastName": "Altenwerth",
	      "jerseyNumber": 8,
	      "position": "C",
	      "age": 16,
	      "atBats": [
	        {
	          "id": 8,
	          "playerId": 8,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "3B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 2,
	          "gameId": 1,
	          "balls": 3,
	          "strikes": 1,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 18,
	          "playerId": 8,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "CF",
	          "baseValue": "F.O.",
	          "isHit": false,
	          "inningNumber": 4,
	          "gameId": 1,
	          "balls": 0,
	          "strikes": 2,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 38,
	          "playerId": 8,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "2B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 2,
	          "gameId": 2,
	          "balls": 0,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 9,
	      "firstName": "Obie",
	      "lastName": "Schimmel",
	      "jerseyNumber": 5,
	      "position": "P",
	      "age": 16,
	      "atBats": [
	        {
	          "id": 9,
	          "playerId": 9,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "2B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 2,
	          "gameId": 1,
	          "balls": 2,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 19,
	          "playerId": 9,
	          "runsBattedIn": 0,
	          "basePosition": 1,
	          "fieldPosition": "LF",
	          "baseValue": "1B",
	          "isHit": true,
	          "inningNumber": 4,
	          "gameId": 1,
	          "balls": 0,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 39,
	          "playerId": 9,
	          "runsBattedIn": 0,
	          "basePosition": 0,
	          "fieldPosition": "2B",
	          "baseValue": "G.O.",
	          "isHit": false,
	          "inningNumber": 2,
	          "gameId": 2,
	          "balls": 0,
	          "strikes": 0,
	          "createdAt": "2019-12-05T00:54:50.000Z",
	          "updatedAt": "2019-12-05T00:54:50.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    }
	  ],
	  "games": [
	    {
	      "id": 1,
	      "name": "Subway Series",
	      "teams": [
	        {
	          "id": 1,
	          "name": "Yankees",
	          "players": [
	            {
	              "id": 1,
	              "firstName": "Nicola",
	              "lastName": "Keebler",
	              "jerseyNumber": 38,
	              "position": "1B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 1,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "P",
	                  "baseValue": "K",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 3,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 10,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "RF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 20,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "LF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 30,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 2,
	              "firstName": "Martin",
	              "lastName": "Zieme",
	              "jerseyNumber": 1,
	              "position": "2B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 2,
	                  "playerId": 2,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 11,
	                  "playerId": 2,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "CF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 31,
	                  "playerId": 2,
	                  "runsBattedIn": 1,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 2,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 3,
	              "firstName": "Shanie",
	              "lastName": "Haley",
	              "jerseyNumber": 4,
	              "position": "3B",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 3,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "CF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 12,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 32,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 33,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "P",
	                  "baseValue": "K",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 3,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 4,
	              "firstName": "Veronica",
	              "lastName": "Greenholt",
	              "jerseyNumber": 7,
	              "position": "SS",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 4,
	                  "playerId": 4,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 13,
	                  "playerId": 4,
	                  "runsBattedIn": 2,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 34,
	                  "playerId": 4,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 5,
	              "firstName": "Lenore",
	              "lastName": "Boehm",
	              "jerseyNumber": 9,
	              "position": "LF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 5,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 2,
	                  "fieldPosition": "1B",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 14,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "RF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 15,
	                  "playerId": 5,
	                  "runsBattedIn": 1,
	                  "basePosition": 1,
	                  "fieldPosition": "1B",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 35,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "3B",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 6,
	              "firstName": "Jess",
	              "lastName": "Hahn",
	              "jerseyNumber": 3,
	              "position": "RF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 6,
	                  "playerId": 6,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "RF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 16,
	                  "playerId": 6,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 36,
	                  "playerId": 6,
	                  "runsBattedIn": 1,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 7,
	              "firstName": "Rosendo",
	              "lastName": "Baumbach",
	              "jerseyNumber": 9,
	              "position": "CF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 7,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 1,
	                  "fieldPosition": "CF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 17,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 37,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 8,
	              "firstName": "Wilma",
	              "lastName": "Altenwerth",
	              "jerseyNumber": 8,
	              "position": "C",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 8,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 18,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "CF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 38,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 9,
	              "firstName": "Obie",
	              "lastName": "Schimmel",
	              "jerseyNumber": 5,
	              "position": "P",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 9,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 19,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 1,
	                  "fieldPosition": "LF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 39,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 2,
	          "name": "Mets",
	          "players": [
	            {
	              "id": 10,
	              "firstName": "Kaylah",
	              "lastName": "Schmeler",
	              "jerseyNumber": 1,
	              "position": "1B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 21,
	                  "playerId": 10,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "C",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 11,
	              "firstName": "Edwardo",
	              "lastName": "Feil",
	              "jerseyNumber": 3,
	              "position": "2B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 22,
	                  "playerId": 11,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "LF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 12,
	              "firstName": "Laverna",
	              "lastName": "Swaniawski",
	              "jerseyNumber": 8,
	              "position": "3B",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 23,
	                  "playerId": 12,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 13,
	              "firstName": "Vilma",
	              "lastName": "Jaskolski",
	              "jerseyNumber": 1,
	              "position": "SS",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 24,
	                  "playerId": 13,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "CF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 14,
	              "firstName": "Ida",
	              "lastName": "Schaefer",
	              "jerseyNumber": 1,
	              "position": "LF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 25,
	                  "playerId": 14,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "RF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 15,
	              "firstName": "Darron",
	              "lastName": "Breitenberg",
	              "jerseyNumber": 6,
	              "position": "RF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 26,
	                  "playerId": 15,
	                  "runsBattedIn": 2,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 16,
	              "firstName": "Anita",
	              "lastName": "Kreiger",
	              "jerseyNumber": 4,
	              "position": "CF",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 27,
	                  "playerId": 16,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 17,
	              "firstName": "Mustafa",
	              "lastName": "Langworth",
	              "jerseyNumber": 9,
	              "position": "C",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 28,
	                  "playerId": 17,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 18,
	              "firstName": "Delphia",
	              "lastName": "Christiansen",
	              "jerseyNumber": 4,
	              "position": "P",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 29,
	                  "playerId": 18,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        }
	      ],
	      "innings": [
	        {
	          "id": 1,
	          "inningNumber": 1,
	          "gameId": 1,
	          "atBats": [
	            {
	              "id": 1,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "P",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 3,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 2,
	              "playerId": 2,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "LF",
	              "isHit": true,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 3,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "CF",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 4,
	              "playerId": 4,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "1B",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 21,
	              "playerId": 10,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "C",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 22,
	              "playerId": 11,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "LF",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 23,
	              "playerId": 12,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "SS",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 2,
	          "inningNumber": 2,
	          "gameId": 1,
	          "atBats": [
	            {
	              "id": 5,
	              "playerId": 5,
	              "runsBattedIn": 0,
	              "basePosition": 2,
	              "fieldPosition": "1B",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 6,
	              "playerId": 6,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "RF",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 7,
	              "playerId": 7,
	              "runsBattedIn": 0,
	              "basePosition": 1,
	              "fieldPosition": "CF",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 8,
	              "playerId": 8,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "3B",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 9,
	              "playerId": 9,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 24,
	              "playerId": 13,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "CF",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 25,
	              "playerId": 14,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "RF",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 26,
	              "playerId": 15,
	              "runsBattedIn": 2,
	              "basePosition": 3,
	              "fieldPosition": "CF",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 27,
	              "playerId": 16,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "3B",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 28,
	              "playerId": 17,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "1B",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 29,
	              "playerId": 18,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "SS",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 3,
	          "inningNumber": 3,
	          "gameId": 1,
	          "atBats": [
	            {
	              "id": 10,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "RF",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 11,
	              "playerId": 2,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "CF",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 2,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 12,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "3B",
	              "isHit": false,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 13,
	              "playerId": 4,
	              "runsBattedIn": 2,
	              "basePosition": 4,
	              "fieldPosition": "LF",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 14,
	              "playerId": 5,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "RF",
	              "isHit": false,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 15,
	              "playerId": 5,
	              "runsBattedIn": 1,
	              "basePosition": 1,
	              "fieldPosition": "1B",
	              "isHit": true,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 16,
	              "playerId": 6,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "SS",
	              "isHit": false,
	              "inningNumber": 3,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 4,
	          "inningNumber": 4,
	          "gameId": 1,
	          "atBats": [
	            {
	              "id": 17,
	              "playerId": 7,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "isHit": false,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 1,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 18,
	              "playerId": 8,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "CF",
	              "isHit": false,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 19,
	              "playerId": 9,
	              "runsBattedIn": 0,
	              "basePosition": 1,
	              "fieldPosition": "LF",
	              "isHit": true,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 0,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 20,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "LF",
	              "isHit": false,
	              "inningNumber": 4,
	              "gameId": 1,
	              "balls": 3,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 5,
	          "inningNumber": 5,
	          "gameId": 1,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 6,
	          "inningNumber": 6,
	          "gameId": 1,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 7,
	          "inningNumber": 7,
	          "gameId": 1,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 8,
	          "inningNumber": 8,
	          "gameId": 1,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 9,
	          "inningNumber": 9,
	          "gameId": 1,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    },
	    {
	      "id": 2,
	      "name": "Rivalry Game",
	      "teams": [
	        {
	          "id": 1,
	          "name": "Yankees",
	          "players": [
	            {
	              "id": 1,
	              "firstName": "Nicola",
	              "lastName": "Keebler",
	              "jerseyNumber": 38,
	              "position": "1B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 1,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "P",
	                  "baseValue": "K",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 3,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 10,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "RF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 20,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "LF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 30,
	                  "playerId": 1,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 2,
	              "firstName": "Martin",
	              "lastName": "Zieme",
	              "jerseyNumber": 1,
	              "position": "2B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 2,
	                  "playerId": 2,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 11,
	                  "playerId": 2,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "CF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 31,
	                  "playerId": 2,
	                  "runsBattedIn": 1,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 2,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 3,
	              "firstName": "Shanie",
	              "lastName": "Haley",
	              "jerseyNumber": 4,
	              "position": "3B",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 3,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "CF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 12,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 32,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                },
	                {
	                  "id": 33,
	                  "playerId": 3,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "P",
	                  "baseValue": "K",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 3,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 4,
	              "firstName": "Veronica",
	              "lastName": "Greenholt",
	              "jerseyNumber": 7,
	              "position": "SS",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 4,
	                  "playerId": 4,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 13,
	                  "playerId": 4,
	                  "runsBattedIn": 2,
	                  "basePosition": 4,
	                  "fieldPosition": "LF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 34,
	                  "playerId": 4,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 2,
	                  "balls": 3,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 5,
	              "firstName": "Lenore",
	              "lastName": "Boehm",
	              "jerseyNumber": 9,
	              "position": "LF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 5,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 2,
	                  "fieldPosition": "1B",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 14,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "RF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 15,
	                  "playerId": 5,
	                  "runsBattedIn": 1,
	                  "basePosition": 1,
	                  "fieldPosition": "1B",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 35,
	                  "playerId": 5,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "3B",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 6,
	              "firstName": "Jess",
	              "lastName": "Hahn",
	              "jerseyNumber": 3,
	              "position": "RF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 6,
	                  "playerId": 6,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "RF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 16,
	                  "playerId": 6,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 3,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 36,
	                  "playerId": 6,
	                  "runsBattedIn": 1,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 7,
	              "firstName": "Rosendo",
	              "lastName": "Baumbach",
	              "jerseyNumber": 9,
	              "position": "CF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 7,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 1,
	                  "fieldPosition": "CF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 17,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 37,
	                  "playerId": 7,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 1,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 8,
	              "firstName": "Wilma",
	              "lastName": "Altenwerth",
	              "jerseyNumber": 8,
	              "position": "C",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 8,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 3,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 18,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "CF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 38,
	                  "playerId": 8,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 9,
	              "firstName": "Obie",
	              "lastName": "Schimmel",
	              "jerseyNumber": 5,
	              "position": "P",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 9,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 19,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 1,
	                  "fieldPosition": "LF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 4,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                },
	                {
	                  "id": 39,
	                  "playerId": 9,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "2B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 2,
	                  "balls": 0,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 2,
	          "name": "Mets",
	          "players": [
	            {
	              "id": 10,
	              "firstName": "Kaylah",
	              "lastName": "Schmeler",
	              "jerseyNumber": 1,
	              "position": "1B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 21,
	                  "playerId": 10,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "C",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 11,
	              "firstName": "Edwardo",
	              "lastName": "Feil",
	              "jerseyNumber": 3,
	              "position": "2B",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 22,
	                  "playerId": 11,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "LF",
	                  "baseValue": "F.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 1,
	                  "strikes": 1,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 12,
	              "firstName": "Laverna",
	              "lastName": "Swaniawski",
	              "jerseyNumber": 8,
	              "position": "3B",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 23,
	                  "playerId": 12,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 1,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:49.000Z",
	                  "updatedAt": "2019-12-05T00:54:49.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 13,
	              "firstName": "Vilma",
	              "lastName": "Jaskolski",
	              "jerseyNumber": 1,
	              "position": "SS",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 24,
	                  "playerId": 13,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "CF",
	                  "baseValue": "1B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 14,
	              "firstName": "Ida",
	              "lastName": "Schaefer",
	              "jerseyNumber": 1,
	              "position": "LF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 25,
	                  "playerId": 14,
	                  "runsBattedIn": 0,
	                  "basePosition": 4,
	                  "fieldPosition": "RF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 15,
	              "firstName": "Darron",
	              "lastName": "Breitenberg",
	              "jerseyNumber": 6,
	              "position": "RF",
	              "age": 16,
	              "atBats": [
	                {
	                  "id": 26,
	                  "playerId": 15,
	                  "runsBattedIn": 2,
	                  "basePosition": 3,
	                  "fieldPosition": "CF",
	                  "baseValue": "2B",
	                  "isHit": true,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 0,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 16,
	              "firstName": "Anita",
	              "lastName": "Kreiger",
	              "jerseyNumber": 4,
	              "position": "CF",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 27,
	                  "playerId": 16,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "3B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 2,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 17,
	              "firstName": "Mustafa",
	              "lastName": "Langworth",
	              "jerseyNumber": 9,
	              "position": "C",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 28,
	                  "playerId": 17,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "1B",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            },
	            {
	              "id": 18,
	              "firstName": "Delphia",
	              "lastName": "Christiansen",
	              "jerseyNumber": 4,
	              "position": "P",
	              "age": 15,
	              "atBats": [
	                {
	                  "id": 29,
	                  "playerId": 18,
	                  "runsBattedIn": 0,
	                  "basePosition": 0,
	                  "fieldPosition": "SS",
	                  "baseValue": "G.O.",
	                  "isHit": false,
	                  "inningNumber": 2,
	                  "gameId": 1,
	                  "balls": 0,
	                  "strikes": 2,
	                  "createdAt": "2019-12-05T00:54:50.000Z",
	                  "updatedAt": "2019-12-05T00:54:50.000Z"
	                }
	              ],
	              "createdAt": "2019-12-05T00:54:49.000Z",
	              "updatedAt": "2019-12-05T00:54:49.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        }
	      ],
	      "innings": [
	        {
	          "id": 10,
	          "inningNumber": 1,
	          "gameId": 2,
	          "atBats": [
	            {
	              "id": 30,
	              "playerId": 1,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "LF",
	              "isHit": true,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 31,
	              "playerId": 2,
	              "runsBattedIn": 1,
	              "basePosition": 3,
	              "fieldPosition": "CF",
	              "isHit": true,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 2,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 32,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 33,
	              "playerId": 3,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "P",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 3,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 34,
	              "playerId": 4,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "1B",
	              "isHit": false,
	              "inningNumber": 1,
	              "gameId": 2,
	              "balls": 3,
	              "strikes": 2,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 11,
	          "inningNumber": 2,
	          "gameId": 2,
	          "atBats": [
	            {
	              "id": 35,
	              "playerId": 5,
	              "runsBattedIn": 0,
	              "basePosition": 4,
	              "fieldPosition": "3B",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 1,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 36,
	              "playerId": 6,
	              "runsBattedIn": 1,
	              "basePosition": 3,
	              "fieldPosition": "CF",
	              "isHit": true,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 0,
	              "strikes": 1,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 37,
	              "playerId": 7,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "SS",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 1,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 38,
	              "playerId": 8,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 0,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            },
	            {
	              "id": 39,
	              "playerId": 9,
	              "runsBattedIn": 0,
	              "basePosition": 0,
	              "fieldPosition": "2B",
	              "isHit": false,
	              "inningNumber": 2,
	              "gameId": 2,
	              "balls": 0,
	              "strikes": 0,
	              "createdAt": "2019-12-05T00:54:50.000Z",
	              "updatedAt": "2019-12-05T00:54:50.000Z"
	            }
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 12,
	          "inningNumber": 3,
	          "gameId": 2,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 13,
	          "inningNumber": 4,
	          "gameId": 2,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 14,
	          "inningNumber": 5,
	          "gameId": 2,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 15,
	          "inningNumber": 6,
	          "gameId": 2,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 16,
	          "inningNumber": 7,
	          "gameId": 2,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 17,
	          "inningNumber": 8,
	          "gameId": 2,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        },
	        {
	          "id": 18,
	          "inningNumber": 9,
	          "gameId": 2,
	          "atBats": [
	            
	          ],
	          "createdAt": "2019-12-05T00:54:49.000Z",
	          "updatedAt": "2019-12-05T00:54:49.000Z"
	        }
	      ],
	      "createdAt": "2019-12-05T00:54:49.000Z",
	      "updatedAt": "2019-12-05T00:54:49.000Z"
	    }
	  ]
	}
}











