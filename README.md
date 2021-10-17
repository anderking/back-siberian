# SIBERIAN API

Service layer for Siberian system developed by Team Watson for the subject Information Systems in Software Engineering at UCLA Barquisimeto.

## Table of Contents

(WIP)
- [Getting started](#getting-started)
	- [Live demo](#using-the-live-demo)
	- [Local usage](#using-locally)
		- [Installation](#installation)
- [Endpoints](#endpoints-definition)
	- [User](#user)
		- [Register client](#httplocalhost12225apiuserregister-post)
		- [Login](#httplocalhost12225apiuserlogin-post)
		- [Create](#httplocalhost12225apiuser-post)
		- [Update](#httplocalhost12225apiuserid-put)
		- [Inactivate](#httplocalhost12225apiuseridinactivate-put)
		- [Activate](#httplocalhost12225apiuseridactivate-put)
		- [Change role](#httplocalhost12225apiuseruidrolerid-put)
		- [Delete](#httplocalhost12225apiuserid-delete)
		- [Get all](#httplocalhost12225apiuser-get)
		- [Get one](#httplocalhost12225apiuserid-get)
		- [Get by role](#httplocalhost12225apiuserrolesid-get)
		- [Get by status](#httplocalhost12225apiuserstatusid-get)
		- [Set Parameters](#httplocalhost12225apiuseridparameter-put)
	- [Location](#location)
		- [Create](#httplocalhost12225apilocation-post)
		- [Update](#httplocalhost12225apilocationid-put)
		- [Delete](#httplocalhost12225apilocationid-delete)
		- [Get all by user](#httplocalhost12225apilocationuserid-get)
	- [Role](#role)
		- [Create](#httplocalhost12225apirole-post)
		- [Update](#httplocalhost12225apiroleid-put)
		- [Delete](#httplocalhost12225apiroleid-delete)
		- [Change role](#httplocalhost12225apiroleidstatusstatus-put)
		- [Get all](httplocalhost12225apirole)
	- [Function](#role)
	- [Phone](#phone)
		- [Create](#httplocalhost12225apiphoneuserid-post)
		- [Save](#httplocalhost12225apiphoneuserIdsave-post)
		- [Update](#httplocalhost12225apiphoneid-put)
		- [Delete](#httplocalhost12225apiphoneid-delete)
		- [Get all by user](#httplocalhost12225apiphoneuserid-get)
	- [Company](#company)
		- [Create](#httplocalhost12225apicompany-post)
		- [Update](#httplocalhost12225apicompanyid-put)
		- [Get one](#httplocalhost12225apicompanyid-get)
	- [Category](#category)
		- [Create](#httplocalhost12225apicategory-post)
		- [Update](#httplocalhost12225apicategoryid-put)
		- [Delete](#httplocalhost12225apicategoryid-delete)
		- [Get all](#httplocalhost12225apicategory-get)
		- [Get one](#httplocalhost12225apicategoryid-get)
	- [Subcategory](#subcategory)
		- [Create](#httplocalhost12225apisubcategory-post)
		- [Update](#httplocalhost12225apisubcategoryid-put)
		- [Delete](#httplocalhost12225apisubcategoryid-delete)
		- [Get all](#httplocalhost12225apisubcategory-get)
		- [Get one](#httplocalhost12225apisubcategoryid-get)
	- [Service](#service)
		- [Create](#httplocalhost12225apiequipinfras-post)
		- [Update](#httplocalhost12225apiequipinfrasid-put)
		- [Delete](#httplocalhost12225apiequipinfrasid-delete)
		- [Add variety](#httplocalhost12225apiequipinfrasvariety-post)
		- [Delete variety](#httplocalhost12225apiequipinfraseidvarietyvid-delete)
		- [Get all](#httplocalhost12225apiequipinfras-get)
		- [Get one](#httplocalhost12225apiequipinfrasid-get)
		- [Search by name and status](#httplocalhost12225apiequipinfrasns-get)
	- [Variety](#variety)
		- [Create](#httplocalhost12225apivariety-post)
		- [Update](#httplocalhost12225apivarietyid-put)
		- [Delete](#httplocalhost12225apivarietyid-delete)
		- [Get all](#httplocalhost12225apivariety-get)
		- [Get one](#httplocalhost12225apivarietyid-get)
	- [Variety detail](#variety-detail)
		- [Create](#httplocalhost12225apivarietydetail-post)
		- [Update](#httplocalhost12225apivarietydetailid-put)
        - [Get](#httplocalhost12225apivarietydetailid-get)
		- [Set services](#httplocalhost12225apivarietydetailidservice-put)
		- [Delete](#httplocalhost12225apivarietydetailid-delete)
		- [Get services](#httplocalhost12225apivarietydetailidservice-get)
	- [Catalogue](#catalogue)
		- [Get categories and subcategories](#httplocalhost12225apicatalogue-get)
		- [Get services of a subcategory](#httplocalhost12225apicataloguesubcategoryid-get)
		- [Get varieties and details of a service](#httplocalhost12225apicatalogueequipinfrasid-get)
		- [Search by name](#httplocalhost12225apicataloguen-get)
	- [Activity](#activity)
		- [Create](#httplocalhost12225apiactivity-post)
		- [Update](#httplocalhost12225apiactivityid-put)
		- [Delete](#httplocalhost12225apiactivityid-delete)
		- [Get all](#httplocalhost12225apiactivity-get)
		- [Get one](#httplocalhost12225apiactivityid-get)
	- [Component](#component)
		- [Create](#httplocalhost12225apicomponent-post)
		- [Update](#httplocalhost12225apicomponentid-put)
		- [Delete](#httplocalhost12225apicomponentid-delete)
		- [Get all](#httplocalhost12225apicomponent-get)
		- [Get one](#httplocalhost12225apicomponentid-get)
	- [Policy](#policy)
		- [Create](#httplocalhost12225apipolicy-post)
		- [Update](#httplocalhost12225apipolicyid-put)
		- [Delete](#httplocalhost12225apipolicyid-delete)
		- [Get all](#httplocalhost12225apipolicy-get)
		- [Get one](#httplocalhost12225apipolicyid-get)
	- [Resource](#resource)
		- [Create](#httplocalhost12225apiresource-post)
		- [Update](#httplocalhost12225apiresourceid-put)
		- [Delete](#httplocalhost12225apiresourceid-delete)
		- [Get all](#httplocalhost12225apiresource-get)
		- [Get one](#httplocalhost12225apiresourceid-get)
	- [Service Detail](#service-detail)
		- [Create](#httplocalhost12225apiservicedetail-post)
		- [Update](#httplocalhost12225apiservicedetailid-put)
		- [Delete](#httplocalhost12225apiservicedetailid-delete)
		- [Get all](#httplocalhost12225apiservicedetail-get)
		- [Get one](#httplocalhost12225apiservicedetailid-get)
	- [Skill](#skill)
        - [Create](#httplocalhost12225apiskill-post)
        - [Update](#httplocalhost12225apiskillid-put)
        - [Delete](#httplocalhost12225apiskillid-delete)
        - [Get all](#httplocalhost12225apiskill-get)
        - [Get one](#httplocalhost12225apiskillid-get)
        - [Get users by skills](#httplocalhost12225apiskillusersservice-get)
    - [Revision](#revision)
        - [Create](#httplocalhost12225apirevision-post)
        - [Create For Warranty](#httplocalhost12225apirevisionwarrantyserviceOrderId-post)
        - [Update](#httplocalhost12225apirevisionid-put)
        - [Delete](#httplocalhost12225apirevisionid-delete)
        - [Get all](#httplocalhost12225apirevision-get)
        - [Get All For Warranty](#httplocalhost12225apirevisionwarranty-get)
        - [Get one](#httplocalhost12225apirevisionid-get)
        - [Get all by User](#httplocalhost12225apirevisionuseruserid-get)
        - [Get all by Lender](#httplocalhost12225apirevisionlenderlenderId-get)
        - [Approve Revision](#httplocalhost12225apirevisionidapprove-put)
        - [Reject Revision](#httplocalhost12225apirevisionidrejectmotiveid-put)
        - [Irreparable Revision](#httplocalhost12225apirevisionidirreparablemotiveid-put)
        - [Diagnose Revision](#httplocalhost12225apirevisioniddiagnose-put)
	- [Service Order](#service-order)
		- [Create](#httplocalhost12225apiserviceorder-post)
		- [Update](#httplocalhost12225apiserviceorderid-put)
		- [Delete](#httplocalhost12225apiserviceorderid-delete)
		- [Get all](#httplocalhost12225apiserviceorder-get)
		- [Get one](#httplocalhost12225apiserviceorderid-get)
        - [Get all by User](#httplocalhost12225apiserviceorderuseruserid-get)
		- [Approve Service Order](#httplocalhost12225apiserviceorderidapprove-put)
		- [Reject Service Order](#httplocalhost12225apiserviceorderidrejectmotiveid-put)
		- [Warranty Service Order](#httplocalhost12225apiserviceorderidwarranty-put)
	- [Lender](#lender)
		- [Set skills](#httplocalhost12225apilenderid-put)
		- [Get all](#httplocalhost12225apilender-get)
		- [Get one](#httplocalhost12225apilenderid-get)
        - [Get Availability](#httplocalhost12225apiavailabilityid-get)
    - [Calendar](#Calendar)
		- [Get All](#httplocalhost12225apicalendar-get)
        - [Get Free Lenders](#httplocalhost12225apicalendarlendersFreedateturn-get)
		- [Get All between dates](#httplocalhost12225apicalendarsDateeDate-get)
		- [Get by Lender between dates](#httplocalhost12225apicalendarlenderIdsDateeDate-get)
        - [Get by Lender](#httplocalhost12225apicalendarlenderlenderId-get)
        - [Create](#httplocalhost12225apicalendar-post)
        - [Execute](#httplocalhost12225apicalendaridexecute-put)
        - [Recreate](#httplocalhost12225apicalendaridrecreate-put)
        - [Delete](#httplocalhost12225apicalendarid-delete)
    - [Motive](#motive)
		- [Create](#httplocalhost12225apimotive-post)
		- [Update](#httplocalhost12225apimotiveid-put)
		- [Delete](#httplocalhost12225apimotiveid-delete)
		- [Get all](#httplocalhost12225apimotive-get)
		- [Get one](#httplocalhost12225apimotiveid-get)
    - [Qualification](#qualification)
        - [Create](#httplocalhost12225apiqualification-post)
        - [Update](#httplocalhost12225apiqualificationid-put)
        - [Get one](#httplocalhost12225apiqualificationid-get)
        - [Get all by User](#httplocalhost12225apiqualificationuseruserid-get)
        - [Get all by Service Detail](#httplocalhost12225apiqualificationservicedetailservicedetailid-get)
        - [Delete](#httplocalhost12225apiqualificationid-delete)
    - [Group](#group)
		- [Create](#httplocalhost12225apigroup-post)
		- [Update](#httplocalhost12225apigroupid-put)
		- [Delete](#httplocalhost12225apigroupid-delete)
		- [Get all](#httplocalhost12225apigroup-get)
		- [Get one](#httplocalhost12225apigroupid-get)
    - [Parameter](#parameter)
		- [Create](#httplocalhost12225apiparameter-post)
		- [Update](#httplocalhost12225apiparameterid-put)
		- [Delete](#httplocalhost12225apiparameterid-delete)
		- [Get all](#httplocalhost12225apiparameter-get)
		- [Get one](#httplocalhost12225apiparameterid-get)
    - [Promotion](#promotion)
		- [Create](#httplocalhost12225apipromotion-post)
		- [Update](#httplocalhost12225apipromotionid-put)
		- [Delete](#httplocalhost12225apipromotionid-delete)
		- [Get all](#httplocalhost12225apipromotion-get)
		- [Get one](#httplocalhost12225apipromotionid-get)
		- [Set Parameters](#httplocalhost12225apipromotionidparameter-put)
		- [Get By Subcategory](#httplocalhost12225apipromotionsubcategoryid-get)
		- [Get By Equipinfras](#httplocalhost12225apipromotionequipinfrasid-get)
		- [Get By Equipinfras And User](#httplocalhost12225apipromotionequipinfraseiduseruid-get)
- [Authors](#authors)

## Getting Started

These instructions will help you to set up the environment for using the API.

### Using the live demo

Use the base URL https://siberian-api.herokuapp.com/api on your application or on your favorite ADE (like [Postman](https://www.getpostman.com)).

### Using locally

1. To use locally you first need to set up a PostgresSQL Database. Check the [documentation](https://www.postgresql.org/) to learn how to do it.
2. Edit the [`config.json`](https://gitlab.com/team-watson/api/blob/dev/config/config.json) file with your credentials or configure your database with the given data.
3. Install [Node](https://nodejs.org/) (^10.x.x).
4. Use [Yarn](https://yarnpkg.com/) as package manager.

#### Installation

Run the following commands in a terminal.

```bash
$ git clone https://gitlab.com/team-watson/api.git
$ cd API
$ yarn
$ yarn db
$ yarn start
```

## Endpoints Definition

* Note: The private endpoints need a token to pass the authentication. The token is obtained through login endpoint. Set the header with the given value.
```
x-access-token: token-value
```

You can import the files on Postman using this link: https://www.getpostman.com/collections/390658674936752af9dc

---

### User

* Note: dniTypes allowed types: `'v', 'j', 'e'`, gender allowed types: `'Masculino', 'Femenino', 'Otro'`

#### http://localhost:12225/api/user/register (POST)

Creates a user with Role: Client.

**REQUEST**
Headers: `Content-Type: application/json`
``` json
{
	"email": "anderson@gmail.com",
	"password": "12345678",
	"firstName": "anderson",
	"lastName": "diaz",
	"dni": "24524514",
	"dniType": "v"
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
		"code": 200,
		"text": "Usuario creado exitosamente."
  },
  "user": {
    "id": 25,
    "email": "anderson@gmail.com",
    "firstName": "anderson",
    "lastName": "diaz",
    "dni": 24524514,
    "dniType": "v",
    "role": {
    	"id": 3,
    	"name": "Cliente",
    	"description": "Usuario que solicita servicios"
    }
	},
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTU2NjI3NjUxOCwiZXhwIjoxNTY2ODgxMzE4fQ.LBTOCTOpEkXz3spWTr3MRVRJFJTXptWboYg6au31bXU"
}
```

---

#### http://localhost:12225/api/user/login (POST)

Authenticate an User.

**REQUEST**
Headers: `Content-Type: application/json`
``` json
{
	"email": "maria@gmail.com",
	"password": "12345678"
}
```

**RESPONSE**
```json
{
	"status": true,
  	"message": {
		"code": 200
  },
  "user": {
  	"id": 2,
  	"email": "maria@gmail.com",
  	"firstName": "Maria",
  	"lastName": "Moreno",
  	"dni": 2345678,
  	"dniType": "v",
  	"dateOfBirth": "1994-12-24",
    "gender": "Femenino",
    "status": "active",
  	"role": {
			"id": 2,
			"name": "Prestador",
			"description": "Usuario que puede chequear su calendario de trabajo",
			"functions": [{
        "id": 3,
        "title": "Dashboard Prestador",
        "entity": "Dashboard",
        "action": "Ver Dashboard",
        "urlIntranet": "dashboard/lender"
      }]
    }
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTY2Mjc3NjE3LCJleHAiOjE1NzE0NjE2MTd9.Ln0-xsPrPTcScGZf4ZKrC9D4IUgQuX23UZfVzS0H3v4"
}
```

---

#### http://localhost:12225/api/user (POST)

Create an User.

**REQUEST**
Headers: `Content-Type: application/json`, `x-access-token`
```json
{
	"email": "marianyeli@gmail.com",
	"password": "12345678",
	"firstName": "Nany",
	"lastName": "Ruiz",
	"dni": "24524514",
	"dniType": "v",
	"RoleId": "2",
	"dateOfBirth": "1992-04-24",
	"gender": "Femenino",
	"note": "La subcoordinadora"
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Usuario creado exitosamente."
  },
  "user": {
  	"id": 28,
    "email": "marianyeli@gmail.com",
    "firstName": "Nany",
    "lastName": "Ruiz",
    "dni": 24524514,
    "dniType": "v",
    "dateOfBirth": "1992-04-24",
    "gender": "Femenino",
    "note": "La subcoordinadora",
    "status": "active",
    "role": {
      "id": 2,
      "name": "Prestador",
      "description": "Usuario que puede chequear su calendario de trabajo",
      "functions": [{
        "id": 3,
        "title": "Dashboard Prestador",
        "entity": "Dashboard",
        "action": "Ver Dashboard",
        "urlIntranet": "dashboard/lender"
      }]
    }
  }
}
```

---


#### http://localhost:12225/api/user/:id (PUT)

Update an User.

**REQUEST**
Headers: `Content-Type: application/json`, `x-acces-token`
```json
{
  "firstName": "Pablo",
  "lastName": "Ponte",
  "dni": "3687451",
  "dniType": "v",
  "gender": "Masculino",
	"note": "Nueva nota",
	"locations": [{
		"address": "UrbTarabana II, Sector II, Calle 20",
		"state": "Lara",
		"city": "Cabudare",
		"postalCode": "3023",
		"isLivingPlace": true
	}]
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Usuario modificado exitosamente."
  },
  "user": {
    "id": 5,
    "email": "anderson@gmail.com",
    "firstName": "Pablo",
    "lastName": "Ponte",
    "dni": 3687451,
    "dniType": "v",
    "gender": "Masculino",
    "note": "Actualizado",
    "phones": [],
    "locations": [{
      "id": 4,
      "address": "UrbTarabana II, Sector II, Calle 20",
      "state": "Lara",
      "city": "Cabudare",
      "postalCode": "3023",
      "isLivingPlace": true
    }],
    "role": {
      "id": 3,
      "name": "Cliente",
      "description": "Usuario que solicita servicios"
    }
  }
}
```

---

#### http://localhost:12225/api/user/:id/inactivate (PUT)

Set User status to 'inactive'.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Usuario desactivado exitosamente."
	}
}
```

---

#### http://localhost:12225/api/user/:id/activate (PUT)

Set User status to 'active'.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Usuario activado exitosamente."
	}
}
```

---

#### http://localhost:12225/api/user/:uid/role/:rid (PUT)

Change User role. :uid stands for User ID and :rid stands for RoleId.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Rol modificado exitosamente."
  },
  "user": {
  	"id": 13,
  	"email": "charles@gmail.com",
  	"firstName": "Charles",
  	"lastName": "Doe",
  	"dni": 24524514,
		"dniType": "v",
		"birthDay": "1992-02-24",
		"gender": "Otro",
  	"phones": [],
  	"locations": [],
  	"role": {
			"id": 2,
			"name": "Prestador",
			"description": "Usuario que puede chequear su calendario de trabajo"
  	}
  }
}
```

---

#### http://localhost:12225/api/user/:id (DELETE)

Set User status to 'deleted'.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Usuario eliminado exitosamente."
	}
}
```

---

#### http://localhost:12225/api/user (GET)

Get all active users.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"messages": {
		"code": 200
	},
	"users": [{
		"id": 1,
		"email": "gilberto@gmail.com",
		"firstName": "Gilberto",
		"lastName": "Perez",
		"dni": 1234567,
		"dniType": "v",
		"gender": "Masculino",
		"phones": [{
			"id": 1,
			"number": "+584140710841",
			"phoneType": "Móvil"
		}],
		"locations": [{
			"id": 1,
			"address": "UrbTarabana II, Sector II, Calle 16",
			"state": "Lara",
			"city": "Cabudare",
			"postalCode": "3023",
			"isLivingPlace": true
		}],
		"role": {
			"id": 1,
			"name": "Gerente",
			"description": "Usuario que puede hacer todo"
		}
	},
	{
		"id": 2,
		"email": "maria@gmail.com",
		"firstName": "Maria",
		"lastName": "Moreno",
		"dni": 2345678,
		"dniType": "v",
		"gender": "Femenino",
		"phones": [{
			"id": 2,
			"number": "+582512619576",
			"phoneType": "Casa"
		}],
		"locations": [],
		"role": {
			"id": 2,
			"name": "Prestador",
			"description": "Usuario que puede chequear su calendario de trabajo"
		}
	}]
}
```

**Note**: The location object only return the living place of the user, attribute needed on profile.

---

#### http://localhost:12225/api/user/:id (GET)

Get one active user.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"messages": {
		"code": 200
	},
	"user": {
		"id": 1,
		"email": "gilberto@gmail.com",
		"firstName": "Gilberto",
		"lastName": "Perez",
		"dni": 1234567,
		"dniType": "v",
		"gender": "Masculino",
		"phones": [{
			"id": 1,
			"number": "+584140710841",
			"phoneType": "Móvil"
		}],
		"locations": [{
			"id": 1,
			"address": "UrbTarabana II, Sector II, Calle 16",
			"state": "Lara",
			"city": "Cabudare",
			"postalCode": "3023",
			"isLivingPlace": true
		}],
		"role": {
			"id": 1,
			"name": "Gerente",
			"description": "Usuario que puede hacer todo"
		}
	}
}
```

**Note**: The location object only return the living place of the user, attribute needed on profile.

---


#### http://localhost:12225/api/user/roles/:id (GET)

Get a list of users given the Role ID.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"messages": {
		"code": 200
	},
	"users": [{
		"id": 1,
		"email": "gilberto@gmail.com",
		"firstName": "Gilberto",
		"lastName": "Perez",
		"dni": 1234567,
		"dniType": "v",
		"dateOfBirth": "1994-07-13",
		"gender": "Masculino",
		"status": "active",
		"role": {
			"id": 1,
			"name": "Gerente",
			"description": "Usuario que puede hacer todo"
		}
	}]
}
```

**Note**: The location object only return the living place of the user, attribute needed on profile.

---

#### http://localhost:12225/api/user/status/:status (GET)

Get a list of users given the status.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"messages": {
		"code": 200
	},
	"users": [{
		"id": 9,
		"email": "loremipsum@gmail.com",
		"firstName": "Jane",
		"lastName": "Doe",
		"dni": 24524514,
		"dniType": "v",
		"status": "deleted",
		"role": {
			"id": 3,
			"name": "Cliente",
			"description": "Usuario que solicita servicios"
		}
	}]
}
```

**Note**: The location object only return the living place of the user, attribute needed on profile.

---


#### http://localhost:12225/api/user/:id/parameter (PUT)

Set the parameter to the User. All parameters associated must be passed in the array or the will be unassociated.

**REQUEST**
Headers: `x-access-token`
```json
{
	"parameters": [1,2,3]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Cliente modificado exitosamente."
    },
    "user": {
        "id": 3,
        "email": "junior@gmail.com",
        "firstName": "Junior",
        "lastName": "Camacho",
        "dni": 3456789,
        "dniType": "v",
        "dateOfBirth": "1996-04-02",
        "gender": "Masculino",
        "status": "active",
        "phones": [
            {
                "id": 3,
                "number": "+584145293571",
                "phoneType": "Trabajo"
            }
        ],
        "locations": [
            {
                "id": 3,
                "address": "Carrera 15 entre calle 50 y 51",
                "state": "Lara",
                "city": "Barquisimeto",
                "postalCode": "3001",
                "isLivingPlace": true
            }
        ],
        "role": {
            "id": 3,
            "name": "Cliente",
            "description": "Usuario que solicita servicios"
        },
        "parameters": [
            {
                "id": 1,
                "name": "Tiene Hijos",
                "description": "Padres",
                "status": "active"
            },
            {
                "id": 2,
                "name": "Vive Solo",
                "description": "Vive solo?",
                "status": "active"
            },
            {
                "id": 3,
                "name": "Educador",
                "description": "Profesion es educador",
                "status": "active"
            }
        ]
    }
}
```

---


### Location

#### http://localhost:12225/api/location (POST)

Create a location.

**REQUEST**
Headers: `x-access-token`
```json
{
	"address": "UrbTarabana II, Sector II, Calle 20",
	"state": "Lara",
	"city": "Cabudare",
	"postalCode": "3023",
	"UserId": "14"
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Dirección creada exitosamente."
  },
  "location": {
    "id": 8,
    "address": "UrbTarabana II, Sector II, Calle 20",
    "state": "Lara",
    "city": "Cabudare",
    "postalCode": "3023",
		"UserId": 14
  }
}
```

---

#### http://localhost:12225/api/location/:id (PUT)

Update a location.

**REQUEST**
Headers: `x-access-token`
```json
{
	"address": "UrbTarabana II, Sector II, Calle 20",
	"state": "Lara",
	"city": "Cabudare",
	"postalCode": "3023",
	"UserId": "14"
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Dirección modificada exitosamente."
  },
  "location": {
    "id": 8,
    "address": "UrbTarabana II, Sector II, Calle 20",
    "state": "Lara",
    "city": "Cabudare",
    "postalCode": "3023",
		"UserId": 14
  }
}
```

---


#### http://localhost:12225/api/location/:id (DELETE)

Delete a location given the ID.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Dirección eliminada exitosamente."
    }
}
```

---

#### http://localhost:12225/api/location/:userId (GET)

Get all locations given the user.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200
  },
  "locations": [{
  	"id": 6,
  	"address": "UrbTarabana II, Sector II, Calle 20",
  	"state": "Lara",
  	"city": "Cabudare",
  	"postalCode": "3023",
  	"UserId": 14
  },
  {
    "id": 8,
    "address": "UrbTarabana II, Sector II, Calle 20",
    "state": "Lara",
    "city": "Cabudare",
    "postalCode": "3023",
    "UserId": 14
  },
  {
    "id": 10,
    "address": "UrbTarabana II, Sector II, Calle 20",
    "state": "Lara",
    "city": "Cabudare",
    "postalCode": "3023",
    "UserId": 14
  }]
}
```

---

### Role

#### http://localhost:12225/api/role (POST)

Create a Role.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Recepcionista",
	"description": "Persona que atiende clientes.",
	"functions": [17,22,19]
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Rol creado exitosamente."
  },
  "role": {
    "id": 22,
    "name": "Recepcionista",
    "description": "Persona que atiende clientes.",
    "functions": [{
      "id": 17,
      "title": "Dashboard Cliente",
      "entity": "Dashboard",
      "action": "Ver Dashboard",
      "urlIntranet": "dashboard/user"
    },
    {
      "id": 19,
      "title": "Dashboard Prestador",
      "entity": "Dashboard",
      "action": "Ver Dashboard",
      "urlIntranet": "dashboard/lender"
    },
    {
      "id": 22,
      "parentId": 5,
      "title": "Ver usuario",
      "entity": "Usuario",
      "action": "Ver",
      "urlIntranet": "config/user/:id"
    }]
  }
}
```

---

#### http://localhost:12225/api/role/:id (PUT)

Update a Role.

**REQUEST**
Headers: `x-access-token`
```json
{
	"description": "Persona que atiende clientes."
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Rol modificado exitosamente."
  },
  "role": {
    "id": 8,
    "name": "Recepcionista",
    "description": "Persona que atiende clientes."
    }
}
```

---

#### http://localhost:12225/api/role/:id (DELETE)

Delete a Role.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Rol eliminado exitosamente."
	}
}
```

---

#### http://localhost:12225/api/role/:id/status/:status (PUT)

Update the status of a Role. :status could be 'active' or 'inactive', without quotes.

**REQUEST**
Headers: `x-access-token`
Example of route: http://localhost:12225/api/role/8/active

**RESPONSE**
```json
{
  "status": true,
  "message": {
  	"code": 200,
  	"text": "Rol activado exitosamente."
  }
}
```

---

#### http://localhost:12225/api/role (GET)

Get all Roles.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
  "message": {
    "code": 200
  },
  "roles": [{
    "id": 13,
    "name": "Gerente",
    "description": "Usuario que puede hacer todo",
    "functions": [{
      "id": 18,
      "title": "Dashboard Gerente",
      "entity": "Dashboard",
      "action": "Ver Dashboard",
      "urlIntranet": "dashboard/manager"
    },
    {
    	"id": 20,
    	"title": "Configuracion",
    	"entity": "Configuracion",
    	"action": "Ver configuracion",
    	"urlIntranet": "config"
    }]
  },
  {
    "id": 14,
    "name": "Prestador",
    "description": "Usuario que puede chequear su calendario de trabajo",
    "functions": [{
			"id": 19,
			"title": "Dashboard Prestador",
			"entity": "Dashboard",
			"action": "Ver Dashboard",
			"urlIntranet": "dashboard/lender"
    }]
  },
  {
    "id": 15,
    "name": "Cliente",
    "description": "Empleado que recibe a las personas.",
    "functions": [{
      "id": 17,
      "title": "Dashboard Cliente",
      "entity": "Dashboard",
      "action": "Ver Dashboard",
      "urlIntranet": "dashboard/user"
    }]
  }]
}
```

---

#### http://localhost:12225/api/role/:id (GET)

Get a Role.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
  "message": {
    "code": 200
  },
  "role": {
    "id": 15,
    "name": "Cliente",
    "description": "Empleado que recibe a las personas.",
    "functions": [{
      "id": 17,
      "title": "Dashboard Cliente",
      "entity": "Dashboard",
      "action": "Ver Dashboard",
      "urlIntranet": "dashboard/user"
    }]
  }
}
```

---

#### http://localhost:12225/api/role/:id/functions (PUT)

Set the Functions to a role.

**NOTE** All the Function IDs must be sent in the array, old and new ones. The method will unassociate any Function not sent in the array.

**REQUEST**
Headers: `x-access-token`
```json
{
	"functions": [17,20]
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Funciones modificadas exitosamente."
  },
  "role": {
    "id": 15,
    "name": "Cliente",
    "description": "Empleado que recibe a las personas.",
    "status": "active",
    "functions": [{
      "id": 17,
      "title": "Dashboard Cliente",
      "entity": "Dashboard",
      "action": "Ver Dashboard",
      "urlIntranet": "dashboard/user"
    },
    {
      "id": 20,
      "title": "Configuracion",
      "entity": "Configuracion",
      "action": "Ver configuracion",
      "urlIntranet": "config"
    }]
  }
}
```

### Function

#### http://localhost:12225/api/function (GET)

Get all functions.

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "functions": [
        {
            "id": 1,
            "title": "Dashboard Cliente",
            "entity": "Dashboard",
            "action": "Ver Dashboard",
            "urlIntranet": "dashboard/user"
        },
        {
            "id": 2,
            "title": "Dashboard Gerente",
            "entity": "Dashboard",
            "action": "Ver Dashboard",
            "urlIntranet": "dashboard/manager"
        },
        {
            "id": 3,
            "title": "Dashboard Prestador",
            "entity": "Dashboard",
            "action": "Ver Dashboard",
            "urlIntranet": "dashboard/lender"
        },
        {
            "id": 4,
            "title": "Configuracion",
            "entity": "Configuracion",
            "action": "Ver configuracion",
            "urlIntranet": "config"
        }
    ]
}
```

---

### Phone

* Note: phoneType allowed values: `'Móvil', 'Trabajo', 'Casa', 'Otro'`

#### http://localhost:12225/api/phone/userId (POST)

Create a Phone.

**REQUEST**
Headers: `x-access-token`
```json
{
	"number": "+584140710841",
	"phoneType": "Otro"
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
  	"text": "Teléfono creado exitosamente."
  },
	"phone": {
    "id": 4,
    "number": "+584140710841",
    "phoneType": "Otro"
    }
}
```

---

#### http://localhost:12225/api/phone/:userId/save (POST)

Create, Update and Delete Phones.

**REQUEST**
Headers: `x-access-token`
```json
{
	"phones": [{
		"number": "+584241234567",
		"phoneType": "Casa",
		"UserId": "1"
	},
	{
		"number": "+584269876543",
		"phoneType": "Trabajo",
		"UserId": "1"
	},
	{
        "id": 1,
        "number": "+584146666666",
    	"phoneType": "Móvil",
		"UserId": "1"
	}],
	"toDelete": [16,15]
}
```

* Note: An object without ID will be created, object with ID will be updated. ToDelete is an array of IDs that will be deleted.

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Teléfonos actualizados exitosamente."
	},
	"phones": [{
		"id": 17,
		"number": "+584241234567",
		"phoneType": "Casa"
	},
	{
		"id": 18,
		"number": "+584269876543",
		"phoneType": "Trabajo"
	}]
}
```

---

#### http://localhost:12225/api/phone/:id (PUT)

Update a Phone.

**REQUEST**
Headers: `x-access-token`
```json
{
	"number": "+111111111",
	"phoneType": "Otro"
}
```

**RESPONSE**
```json
{
  "status": true,
  "message": {
    "code": 200,
    "text": "Teléfono modificado exitosamente."
  },
  "phone": {
    "id": 1,
    "number": "+111111111",
    "phoneType": "Otro",
    "UserId": 1
  }
}
```

---

#### http://localhost:12225/api/phone/:id (DELETE)

Delete a Phone.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 6

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Teléfono eliminado exitosamente."
    }
}
```

---

#### http://localhost:12225/api/phone/:userId (GET)

Get all User Phones.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"phones": [{
		"id": 17,
		"number": "+584241234567",
		"phoneType": "Casa"
	},
	{
		"id": 18,
		"number": "+584269876543",
		"phoneType": "Trabajo"
	}]
}
```

---

### Company

#### http://localhost:12225/api/company (POST)

Create a Company.

* Note: This method requires `multipart/form-data` to handle the upload of images.

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
```
	rif:            J-001234567
	name:           PiOne
	vision:         Ser la empresa líder en Venezuela en la reparación de todo tipo de artefacto o infraestrutura
	aboutUs:        Empresa dedicada a ofrecer soluciones a los problemas en los hogares de la familia venezolana
	address:        Urb. Las Guacamayas, Torre II, Casa nro 15. Cabudare, Lara (3023). Venezuela
	phoneOne:       +584127489562
	phoneTwo:       +582512624820
	facebook:       PiOne
	instagram:      @pione
	twitter:        @pione
    revisionPrice:  1000
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "message": "Empresa creada exitosamente."
    }
    "company": {
		"id": 1,
		"rif": "J-001234567",
		"name": "PiOne",
		"vision": "Ser la empresa líder en Venezuela en la reparación de todo tipo de artefacto o infraestrutura",
		"aboutUs": "Empresa dedicada a ofrecer soluciones a los problemas en los hogares de la familia venezolana",
		"address": "Urb. Las Guacamayas, Torre II, Casa nro 15. Cabudare, Lara (3023). Venezuela",
		"phoneOne": "+584127489562",
		"phoneTwo": "+582512624820",
		"imageUrl": "public/images/avatar/avatardefault.png",
		"facebook": "PiOne",
		"instagram": "@pione",
        "twitter": "@pione",
        "revisionPrice": 1000
	}
}
```
---

#### http://localhost:12225/api/company (PUT)

Update an Company.

* Note: This method requires **multipart/form-data`` to handle the upload of images.

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
```
	rif:   J-001234588
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "message": "Empresa modificada exitosamente."
    }
	"company": {
		"id": 1,
		"rif": "J-001234588",
		"name": "PiOne",
		"vision": "Ser la empresa líder en Venezuela en la reparación de todo tipo de artefacto o infraestrutura",
		"aboutUs": "Empresa dedicada a ofrecer soluciones a los problemas en los hogares de la familia venezolana",
		"address": "Urb. Las Guacamayas, Torre II, Casa nro 15. Cabudare, Lara (3023). Venezuela",
		"phoneOne": "+584127489562",
		"phoneTwo": "+582512624820",
		"imageUrl": "public/images/avatar/avatardefault.png",
		"facebook": "PiOne",
		"instagram": "@pione",
		"twitter": "@pione",
        "revisionPrice": 1000
	}
}
```

---

#### http://localhost:12225/api/company (GET)

Get a Company.
**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"company": {
			"id": 1,
			"rif": "J-001234567",
			"name": "PiOne",
			"vision": "Ser la empresa líder en Venezuela en la reparación de todo tipo de artefacto o infraestrutura",
			"aboutUs": "Empresa dedicada a ofrecer soluciones a los problemas en los hogares de la familia venezolana",
			"address": "Urb. Las Guacamayas, Torre II, Casa nro 15. Cabudare, Lara (3023). Venezuela",
			"phoneOne": "+584127489562",
			"phoneTwo": "+582512624820",
			"imageUrl": "public/images/avatar/avatardefault.png",
			"facebook": "PiOne",
			"instagram": "@pione",
			"twitter": "@pione",
            "revisionPrice": 1000
	}
}
```
---

### Category

#### http://localhost:12225/api/category (POST)

Add one Category
* Note: This method requires `multipart/form-data` to handle the upload of images.

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
``` json
{
	"name": "Category Test",
	"description": "Description Category Test",
    "imageUrl": "public/images/avatar/avatardefault.png"
}
```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Categoria creada exitosamente."
    },
    "category": {
        "id": 6,
        "name": "Category Test",
        "description": "Description Category Test",
        "status": "active",
        "imageUrl": "public/images/avatar/avatardefault.png"
        "subcategories": []
    }
}
```
---

#### http://localhost:12225/api/category/:id (PUT)

Update one Category

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 6
``` json
{
	"name": "Category Test Updated",
	"description": "Description Category Test Updated "
}
```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Categoria modificada exitosamente."
    },
    "category": {
        "id": 6,
        "name": "Category Test Updated",
        "description": "Description Category Test Updated",
        "status": "active",
        "subcategories": []
    }
}
```
---

#### http://localhost:12225/api/category/:id (DELETE)

Delete one Category

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 6

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Categoria eliminada exitosamente."
    }
}
```

---

#### http://localhost:12225/api/category (GET)

Get all Categories

**REQUEST**
Headers:  `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "categories": [
        {
            "id": 1,
            "name": "Electrodomesticos",
            "description": "Lavadora, Microondas, Neveras...",
            "status": "active",
            "subcategories": [
                {
                    "id": 1,
                    "name": "Linea Blanca",
                    "description": "Neveras, Microondas,Aires Aconcicionados...",
                    "status": "active"
                },
                {
                    "id": 2,
                    "name": "Linea Marron",
                    "description": "Televisor, Reproductor de Audio...",
                    "status": "active"
                },
                {
                    "id": 3,
                    "name": "Otros",
                    "description": "Otros..",
                    "status": "active"
                }
            ]
        },
        {
            "id": 2,
            "name": "Pintura",
            "description": "Interiores, Exteriores",
            "status": "active",
            "subcategories": [
                {
                    "id": 4,
                    "name": "Gotele",
                    "description": "Gotele exterior, Gotele interior",
                    "status": "active"
                },
                {
                    "id": 5,
                    "name": "General",
                    "description": "interior, exterior",
                    "status": "active"
                }
            ]
        },
        {
            "id": 3,
            "name": "Plomeria",
            "description": "Desatascos, Tuberias de interiores y exteriores",
            "status": "active",
            "subcategories": [
                {
                    "id": 6,
                    "name": "Tuberias",
                    "description": "Lavamanos, Lavaplatos, Inodoros, Duchas",
                    "status": "active"
                },
                {
                    "id": 7,
                    "name": "General",
                    "status": "active"
                }
            ]
        },
        {
            "id": 4,
            "name": "Albañileria",
            "description": "Paredes, Pisos de interiores y exteriores",
            "status": "active",
            "subcategories": [
                {
                    "id": 8,
                    "name": "Macro",
                    "description": "Paredes, Techos, Pisos...",
                    "status": "active"
                },
                {
                    "id": 9,
                    "name": "Micro",
                    "description": "Barras...",
                    "status": "active"
                }
            ]
        }
    ]
}

```
---

#### http://localhost:12225/api/category/:id (GET)

Get one Category

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "category": {
        "id": 1,
        "name": "Electrodomesticos",
        "description": "Lavadora, Microondas, Neveras...",
        "status": "active",
        "subcategories": [
            {
                "id": 1,
                "name": "Linea Blanca",
                "description": "Neveras, Microondas,Aires Aconcicionados...",
                "status": "active"
            },
            {
                "id": 2,
                "name": "Linea Marron",
                "description": "Televisor, Reproductor de Audio...",
                "status": "active"
            },
            {
                "id": 3,
                "name": "Otros",
                "description": "Otros..",
                "status": "active"
            }
        ]
    }
}

```
---

### Subcategory

#### http://localhost:12225/api/subcategory (POST)

Add one Subcategory

**REQUEST**
Headers: `x-access-token`
``` json
{
	"CategoryId": "1",
	"name": "Another Subcategory",
	"description": "Description"
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Subcateogria creada exitosamente."
    },
    "subcategory": {
        "id": 11,
        "name": "Another Subcategory",
        "description": "Description",
        "status": "active",
        "category": {
            "id": 1,
            "name": "Electrodomesticos",
            "description": "Lavadora, Microondas, Neveras...",
            "status": "active"
        },
        "equipinfras": []
    }
}
```
---

#### http://localhost:12225/api/subcategory/:id (PUT)

Update one Subcategory

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 11
``` json
{
	"CategoryId": "1",
	"name": "Another Subcategory  Name",
	"description": "Another description."
}
```
**RESPONSE**
``` json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Subcateogria modificada exitosamente."
    },
    "subcategory": {
        "id": 11,
        "name": "Another Subcategory  Name",
        "description": "Another description",
        "status": "active",
        "category": {
            "id": 1,
            "name": "Electrodomesticos",
            "description": "Lavadora, Microondas, Neveras...",
            "status": "active"
        },
        "equipinfras": []
    }
}
```
---

#### http://localhost:12225/api/subcategory/:id (DELETE)

Delete one Subcategory

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 11

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Subcategoria eliminada exitosamente."
    }
}
```
---

#### http://localhost:12225/api/subcategory (GET)

Get all Subcategories

**REQUEST**
Headers:  `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "subcategories": [
        {
            "id": 1,
            "name": "Linea Blanca",
            "description": "Neveras, Microondas,Aires Aconcicionados...",
            "status": "active",
            "category": {
                "id": 1,
                "name": "Electrodomesticos",
                "description": "Lavadora, Microondas, Neveras...",
                "status": "active"
            },
            "equipinfras": [
                {
                    "id": 2,
                    "name": "Nevera",
                    "type": "E",
                    "image_url": "http://someDirection",
                    "description": "neveras",
                    "status": "active"
                },
                {
                    "id": 3,
                    "name": "Aire Acondicionado",
                    "type": "E",
                    "image_url": "http://someDirection",
                    "description": "Aires Acondicionados",
                    "status": "active"
                },
                {
                    "id": 1,
                    "name": "Lavadora",
                    "type": "E",
                    "image_url": "http://someDirection",
                    "description": "lavadora",
                    "status": "active"
                }
            ]
        },
        {
            "id": 2,
            "name": "Linea Marron",
            "description": "Televisor, Reproductor de Audio...",
            "status": "active",
            "category": {
                "id": 1,
                "name": "Electrodomesticos",
                "description": "Lavadora, Microondas, Neveras...",
                "status": "active"
            },
            "equipinfras": [
                {
                    "id": 4,
                    "name": "Televisor ",
                    "type": "E",
                    "image_url": "http://someDirection",
                    "description": "Televisores",
                    "status": "active"
                },
                {
                    "id": 5,
                    "name": "Reproductor Radio ",
                    "type": "E",
                    "image_url": "http://someDirection",
                    "description": "Radios, Repoductores",
                    "status": "active"
                }
            ]
        },
        {
            "id": 3,
            "name": "Otros",
            "description": "Otros..",
            "status": "active",
            "category": {
                "id": 1,
                "name": "Electrodomesticos",
                "description": "Lavadora, Microondas, Neveras...",
                "status": "active"
            },
            "equipinfras": []
        },
        {
            "id": 4,
            "name": "Gotele",
            "description": "Gotele exterior, Gotele interior",
            "status": "active",
            "category": {
                "id": 2,
                "name": "Pintura",
                "description": "Interiores, Exteriores",
                "status": "active"
            },
            "equipinfras": [
                {
                    "id": 6,
                    "name": "Gotele Interiores ",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Metodo de pintado \"Gotele\" en Interiores",
                    "status": "active"
                },
                {
                    "id": 7,
                    "name": "Gotele Exteriores ",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Metodo de pintado \"Gotele\" en Exteriores",
                    "status": "active"
                }
            ]
        },
        {
            "id": 5,
            "name": "General",
            "description": "interior, exterior",
            "status": "active",
            "category": {
                "id": 2,
                "name": "Pintura",
                "description": "Interiores, Exteriores",
                "status": "active"
            },
            "equipinfras": [
                {
                    "id": 8,
                    "name": "Pintura Interiores ",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Metodo de pintado \"General\" en Interiores",
                    "status": "active"
                },
                {
                    "id": 9,
                    "name": "Pintura Exteriores ",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Metodo de pintado \"General\" en Exteriores",
                    "status": "active"
                }
            ]
        },
        {
            "id": 6,
            "name": "Tuberias",
            "description": "Lavamanos, Lavaplatos, Inodoros, Duchas",
            "status": "active",
            "category": {
                "id": 3,
                "name": "Plomeria",
                "description": "Desatascos, Tuberias de interiores y exteriores",
                "status": "active"
            },
            "equipinfras": [
                {
                    "id": 10,
                    "name": "Lavamanos",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Lavamanos",
                    "status": "active"
                }
            ]
        },
        {
            "id": 7,
            "name": "General",
            "status": "active",
            "category": {
                "id": 3,
                "name": "Plomeria",
                "description": "Desatascos, Tuberias de interiores y exteriores",
                "status": "active"
            },
            "equipinfras": []
        },
        {
            "id": 8,
            "name": "Macro",
            "description": "Paredes, Techos, Pisos...",
            "status": "active",
            "category": {
                "id": 4,
                "name": "Albañileria",
                "description": "Paredes, Pisos de interiores y exteriores",
                "status": "active"
            },
            "equipinfras": [
                {
                    "id": 11,
                    "name": "PARED ",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Pared de bloques...",
                    "status": "active"
                },
                {
                    "id": 12,
                    "name": "Techo ",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Techos de ...",
                    "status": "active"
                }
            ]
        },
        {
            "id": 9,
            "name": "Micro",
            "description": "Barras...",
            "status": "active",
            "category": {
                "id": 4,
                "name": "Albañileria",
                "description": "Paredes, Pisos de interiores y exteriores",
                "status": "active"
            },
            "equipinfras": [
                {
                    "id": 13,
                    "name": "Barras ",
                    "type": "I",
                    "image_url": "http://someDirection",
                    "description": "Barras de... ",
                    "status": "active"
                }
            ]
        }
    ]
}
```
---

#### http://localhost:12225/api/subcategory/:id (GET)

Get one subcategory

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "subcategory": {
        "id": 1,
        "name": "Linea Blanca",
        "description": "Neveras, Microondas,Aires Aconcicionados...",
        "status": "active",
        "category": {
            "id": 1,
            "name": "Electrodomesticos",
            "description": "Lavadora, Microondas, Neveras...",
            "status": "active"
        },
        "equipinfras": [
            {
                "id": 1,
                "name": "Lavadora",
                "type": "E",
                "image_url": "http://someDirection",
                "description": "lavadora",
                "status": "active"
            },
            {
                "id": 2,
                "name": "Nevera",
                "type": "E",
                "image_url": "http://someDirection",
                "description": "neveras",
                "status": "active"
            },
            {
                "id": 3,
                "name": "Aire Acondicionado",
                "type": "E",
                "image_url": "http://someDirection",
                "description": "Aires Acondicionados",
                "status": "active"
            }
        ]
    }
}
```
---

### Service

#### http://localhost:12225/api/equipinfras (POST)

Add one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
``` json
{
	"name": "Bomba de Agua",
	"description": "Bomba de Agua",
    "imageUrl":"http://someUrl",
    "SubcategoryId":"3",
    "type":"E"
}
```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Equipo - Infraestructura creado exitosamente."
    },
    "equipinfras": {
        "id": 16,
        "name": "Bomba de Agua ",
        "imageUrl": "http://somedirection",
        "description": "Bomba de Agua",
        "status": "active",
        "subcategory": {
            "id": 3,
            "name": "Otros",
            "description": "Otros..",
            "status": "active"
        },
        "variety": []
    }
}
```
---

#### http://localhost:12225/api/equipinfras/:id (PUT)

Update one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 16

``` json
{
	"description": "another description"
}
```
**Note**: Is possible to update one or all atrributes of the Equipinfras

**RESPONSE**
``` json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Equipo - Infraestructura modificado exitosamente."
    },
    "equipinfras": {
        "id": 16,
        "name": "Hidroneumatico",
        "imageUrl": "http://someUrl",
        "description": "Another description",
        "status": "active",
        "subcategory": {
            "id": 3,
            "name": "Otros",
            "description": "Otros..",
            "status": "active"
        },
        "variety": []
    }
}
```
---

#### http://localhost:12225/api/equipinfras/:id (DELETE)

Delete one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 16

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Equipo - Infraestructura eliminado exitosamente."
    }
}
```
---

#### http://localhost:12225/api/equipinfras/variety (POST)

Add one Variety To one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
``` json
{
	"EquipinfraId": "16",
	"VarietyId": "1"
}
```

**Note**: If the EquipinfraId, is from a Equipinfras of type "I" (infrastructure), this method will create a new varietyDetail Generic. Because there is some Infrastructures that doesn't have a varietyDetail.

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Variedad Equipo - Infraestructura creado exitosamente."
    },
    "equipinfras": [
        {
            "id": 1,
            "name": "Lavadora",
            "type": "E",
            "image_url": "http://someDirection",
            "description": "lavadora",
            "status": "active",
            "subcategory": {
                "id": 1,
                "name": "Linea Blanca",
                "description": "Neveras, Microondas,Aires Aconcicionados...",
                "status": "active"
            },
            "variety": [
                {
                    "id": 2,
                    "name": "Frigilux",
                    "description": "Neveras, aires acondicionados..",
                    "VarietyEquipinfras_id": 3,
                    "status": "active",
                    "varietyDetails": [
                        {
                            "id": 6,
                            "name": "50UK6300PSB TV UHD, 4K",
                            "description": " 50\" ThinQ AI",
                            "VarietyEquipinfras_id": 3,
                            "status": "active"
                        },
                        {
                            "id": 5,
                            "name": "55SK8500PDA TV Super UHD, 4K",
                            "description": "55\" ThinQ AI",
                            "VarietyEquipinfras_id": 3,
                            "status": "active"
                        }
                    ]
                },
                {
                    "id": 1,
                    "name": "LG",
                    "description": "Tvs, aires acondicionados..",
                    "VarietyEquipinfras_id": 1,
                    "status": "active",
                    "varietyDetails": [
                        {
                            "id": 1,
                            "name": "Turbodrum Fuzzy Logic",
                            "description": "12kg",
                            "VarietyEquipinfras_id": 1,
                            "status": "active"
                        },
                        {
                            "id": 2,
                            "name": "Turbodrum Fuzzy Logic",
                            "description": "6Kg",
                            "VarietyEquipinfras_id": 1,
                            "status": "active"
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Nevera",
            "type": "E",
            "image_url": "http://someDirection",
            "description": "neveras",
            "status": "active",
            "subcategory": {
                "id": 1,
                "name": "Linea Blanca",
                "description": "Neveras, Microondas,Aires Aconcicionados...",
                "status": "active"
            },
            "variety": [
                {
                    "id": 1,
                    "name": "LG",
                    "description": "Tvs, aires acondicionados..",
                    "VarietyEquipinfras_id": 2,
                    "status": "active",
                    "varietyDetails": [
                        {
                            "id": 3,
                            "name": " InstaView Door-in-Door",
                            "description": "31 cu.ft. - GM84SXDB",
                            "VarietyEquipinfras_id": 2,
                            "status": "active"
                        },
                        {
                            "id": 4,
                            "name": "InstaView Door-in-Door",
                            "description": "26cu.ft - LS74SXS",
                            "VarietyEquipinfras_id": 2,
                            "status": "active"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Frigilux",
                    "description": "Neveras, aires acondicionados..",
                    "VarietyEquipinfras_id": 4,
                    "status": "active",
                    "varietyDetails": []
                }
            ]
        },
        {
            "id": 3,
            "name": "Aire Acondicionado",
            "type": "E",
            "image_url": "http://someDirection",
            "description": "Aires Acondicionados",
            "status": "active",
            "subcategory": {
                "id": 1,
                "name": "Linea Blanca",
                "description": "Neveras, Microondas,Aires Aconcicionados...",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 4,
            "name": "Televisor ",
            "type": "E",
            "image_url": "http://someDirection",
            "description": "Televisores",
            "status": "active",
            "subcategory": {
                "id": 2,
                "name": "Linea Marron",
                "description": "Televisor, Reproductor de Audio...",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 5,
            "name": "Reproductor Radio ",
            "type": "E",
            "image_url": "http://someDirection",
            "description": "Radios, Repoductores",
            "status": "active",
            "subcategory": {
                "id": 2,
                "name": "Linea Marron",
                "description": "Televisor, Reproductor de Audio...",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 6,
            "name": "Gotele Interiores ",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Metodo de pintado \"Gotele\" en Interiores",
            "status": "active",
            "subcategory": {
                "id": 4,
                "name": "Gotele",
                "description": "Gotele exterior, Gotele interior",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 7,
            "name": "Gotele Exteriores ",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Metodo de pintado \"Gotele\" en Exteriores",
            "status": "active",
            "subcategory": {
                "id": 4,
                "name": "Gotele",
                "description": "Gotele exterior, Gotele interior",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 8,
            "name": "Pintura Interiores ",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Metodo de pintado \"General\" en Interiores",
            "status": "active",
            "subcategory": {
                "id": 5,
                "name": "General",
                "description": "interior, exterior",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 9,
            "name": "Pintura Exteriores ",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Metodo de pintado \"General\" en Exteriores",
            "status": "active",
            "subcategory": {
                "id": 5,
                "name": "General",
                "description": "interior, exterior",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 10,
            "name": "Lavamanos",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Lavamanos",
            "status": "active",
            "subcategory": {
                "id": 6,
                "name": "Tuberias",
                "description": "Lavamanos, Lavaplatos, Inodoros, Duchas",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 11,
            "name": "PARED ",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Pared de bloques...",
            "status": "active",
            "subcategory": {
                "id": 8,
                "name": "Macro",
                "description": "Paredes, Techos, Pisos...",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 12,
            "name": "Techo ",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Techos de ...",
            "status": "active",
            "subcategory": {
                "id": 8,
                "name": "Macro",
                "description": "Paredes, Techos, Pisos...",
                "status": "active"
            },
            "variety": []
        },
        {
            "id": 13,
            "name": "Barras ",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Barras de... ",
            "status": "active",
            "subcategory": {
                "id": 9,
                "name": "Micro",
                "description": "Barras...",
                "status": "active"
            },
            "variety": []
        }
    ]
}
```
---

#### http://localhost:12225/api/equipinfras/:id (GET)

Get one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "equipinfras": {
        "id": 1,
        "name": "Lavadora",
        "type": "E",
        "image_url": "http://someDirection",
        "description": "lavadora",
        "status": "active",
        "subcategory": {
            "id": 1,
            "name": "Linea Blanca",
            "description": "Neveras, Microondas,Aires Aconcicionados...",
            "status": "active"
        },
        "variety": [
            {
                "id": 1,
                "name": "LG",
                "description": "Tvs, aires acondicionados..",
                "status": "active",
                "VarietyEquipinfras_id": 1,
                "varietyDetails": [
                    {
                        "id": 1,
                        "name": "Turbodrum Fuzzy Logic",
                        "description": "12kg",
                        "status": "active",
                        "VarietyEquipinfras_id": 1
                    },
                    {
                        "id": 2,
                        "name": "Turbodrum Fuzzy Logic",
                        "description": "6Kg",
                        "status": "active",
                        "VarietyEquipinfras_id": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Frigilux",
                "description": "Neveras, aires acondicionados..",
                "status": "active",
                "VarietyEquipinfras_id": 3,
                "varietyDetails": [
                    {
                        "id": 5,
                        "name": "55SK8500PDA TV Super UHD, 4K",
                        "description": "55\" ThinQ AI",
                        "status": "active",
                        "VarietyEquipinfras_id": 3
                    },
                    {
                        "id": 6,
                        "name": "50UK6300PSB TV UHD, 4K",
                        "description": " 50\" ThinQ AI",
                        "status": "active",
                        "VarietyEquipinfras_id": 3
                    }
                ]
            }
        ]
    }
}
```
---

#### http://localhost:12225/api/equipinfras/:n/:s (GET)

Get All Equipinfras by name and status. The Name "n", can be any name. The status can be
"active", "inactive", "deleted"

**REQUEST**
Headers: `x-access-token`
Path Variables: n = "lava", s ="active"/"inactive"/"deleted"

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "equipinfras": [
        {
            "id": 1,
            "name": "Lavadora",
            "type": "E",
            "image_url": "http://someDirection",
            "description": "lavadora",
            "status": "active"
        },
        {
            "id": 10,
            "name": "Lavamanos",
            "type": "I",
            "image_url": "http://someDirection",
            "description": "Lavamanos",
            "status": "active"
        }
    ]
}
```
---

### Variety

#### http://localhost:12225/api/variety (POST)

Add one Variety

**REQUEST**
Headers: `x-access-token`
``` json
{
	"name": "HP",
    "description": "Equipos Electronicos"
}

```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Variedad creada exitosamente."
    },
    "equipinfras": {
        "id": 14,
        "name": "Bomba de Agua",
        "type": "E",
        "image_url": "http://someUrl",
        "description": "Bomba de Agua",
        "status": "active",
        "subcategory": {
            "id": 3,
            "name": "Otros",
            "description": "Otros..",
            "status": "active"
        },
        "variety": []
    }
}
```
---

#### http://localhost:12225/api/variety/:id (PUT)

Update one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 14

``` json
{
	"description": "another description"
}
```
**Note**: Is possible to update one or all atrributes of the Variety

**RESPONSE**
``` json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Variedad modificada exitosamente."
    },
    "equipinfras": {
        "id": 14,
        "name": "Bomba de Agua",
        "type": "E",
        "image_url": "http://someUrl",
        "description": "Another description ",
        "status": "active",
        "subcategory": {
            "id": 3,
            "name": "Otros",
            "description": "Otros..",
            "status": "active"
        },
        "variety": []
    }
}
```
---

* http://localhost:12225/api/equipinfras/:id **(DELETE)**

Delete one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 14

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Equipo - Infraestructura eliminado exitosamente."
    }
}
```
---

* http://localhost:12225/api/equipinfras/variety **(POST)**

Add one Variery To one Equipment-Infrastructure

**REQUEST**
Headers: `x-access-token`
``` json
{
	"EquipinfraId": "14",
	"VarietyId": "1"
}
```

**Note**: If the EquipinfraId, is from a Equipinfras of type "I" (infrastructure), this method will create a new varietyDetail Generic. Because there is some Infrastructures that doesn't have a varietyDetail. 

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Variedad Equipo - Infraestructura creado exitosamente."
    },
    "equipinfras": {
        "id": 14,
        "name": "Bomba de Agua",
        "type": "E",
        "image_url": "http://someUrl",
        "description": "Bomba de Agua",
        "status": "active",
        "subcategory": {
            "id": 3,
            "name": "Otros",
            "description": "Otros..",
            "status": "active"
        },
        "variety": [
            {
                "id": 1,
                "name": "LG",
                "description": "Tvs, aires acondicionados..",
                "status": "active",
                "VarietyEquipinfras_id": 5,
                "varietyDetails": []
            }
        ]
    }
}
```
---

#### http://localhost:12225/api/variety/:id (DELETE)

Delete one Variety

**REQUEST**
Headers: `x-access-token`
Path Variables: {eid = 14, vid = 1}

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Variedad eliminada exitosamente."
    }
}
```
---

#### http://localhost:12225/api/variety (GET)

Get all Varieties

**REQUEST**
Headers:  `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "varieties": [
        {
            "id": 1,
            "name": "LG",
            "description": "Tvs, aires acondicionados..",
            "status": "active",
            "equipinfras": [
                {
                    "id": 1,
                    "name": "Lavadora",
                    "type": "E",
                    "description": "lavadora",
                    "VarietyEquipinfras_id": 1,
                    "subcategory": {
                        "id": 1,
                        "name": "Linea Blanca",
                        "description": "Neveras, Microondas,Aires Aconcicionados...",
                        "status": "active"
                    },
                    "varietyDetails": [
                        {
                            "id": 2,
                            "name": "Turbodrum Fuzzy Logic",
                            "description": "6Kg",
                            "VarietyEquipinfras_id": 1
                        },
                        {
                            "id": 1,
                            "name": "Turbodrum Fuzzy Logic",
                            "description": "12kg",
                            "VarietyEquipinfras_id": 1
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Nevera",
                    "type": "E",
                    "description": "neveras",
                    "VarietyEquipinfras_id": 2,
                    "subcategory": {
                        "id": 1,
                        "name": "Linea Blanca",
                        "description": "Neveras, Microondas,Aires Aconcicionados...",
                        "status": "active"
                    },
                    "varietyDetails": [
                        {
                            "id": 4,
                            "name": "InstaView Door-in-Door",
                            "description": "26cu.ft - LS74SXS",
                            "VarietyEquipinfras_id": 2
                        },
                        {
                            "id": 3,
                            "name": " InstaView Door-in-Door",
                            "description": "31 cu.ft. - GM84SXDB",
                            "VarietyEquipinfras_id": 2
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "Frigilux",
            "description": "Neveras, aires acondicionados..",
            "status": "active",
            "equipinfras": [
                {
                    "id": 1,
                    "name": "Lavadora",
                    "type": "E",
                    "description": "lavadora",
                    "VarietyEquipinfras_id": 3,
                    "subcategory": {
                        "id": 1,
                        "name": "Linea Blanca",
                        "description": "Neveras, Microondas,Aires Aconcicionados...",
                        "status": "active"
                    },
                    "varietyDetails": [
                        {
                            "id": 6,
                            "name": "50UK6300PSB TV UHD, 4K",
                            "description": " 50\" ThinQ AI",
                            "VarietyEquipinfras_id": 3
                        },
                        {
                            "id": 5,
                            "name": "55SK8500PDA TV Super UHD, 4K",
                            "description": "55\" ThinQ AI",
                            "VarietyEquipinfras_id": 3
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Nevera",
                    "type": "E",
                    "description": "neveras",
                    "VarietyEquipinfras_id": 4,
                    "subcategory": {
                        "id": 1,
                        "name": "Linea Blanca",
                        "description": "Neveras, Microondas,Aires Aconcicionados...",
                        "status": "active"
                    },
                    "varietyDetails": []
                }
            ]
        },
        {
            "id": 3,
            "name": "Samsung",
            "description": "Electrodomesticos, telefonos, ...",
            "status": "active",
            "equipinfras": []
        }
    ]
}
```
---

#### http://localhost:12225/api/variety/:id (GET)

Get one Variety

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "variety": {
        "id": 1,
        "name": "LG",
        "description": "Tvs, aires acondicionados..",
        "status": "active",
        "equipinfras": [
            {
                "id": 1,
                "name": "Lavadora",
                "type": "E",
                "description": "lavadora",
                "VarietyEquipinfras_id": 1,
                "subcategory": {
                    "id": 1,
                    "name": "Linea Blanca",
                    "description": "Neveras, Microondas,Aires Aconcicionados...",
                    "status": "active"
                },
                "varietyDetails": [
                    {
                        "id": 1,
                        "name": "Turbodrum Fuzzy Logic",
                        "description": "12kg",
                        "VarietyEquipinfras_id": 1
                    },
                    {
                        "id": 2,
                        "name": "Turbodrum Fuzzy Logic",
                        "description": "6Kg",
                        "VarietyEquipinfras_id": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Nevera",
                "type": "E",
                "description": "neveras",
                "VarietyEquipinfras_id": 2,
                "subcategory": {
                    "id": 1,
                    "name": "Linea Blanca",
                    "description": "Neveras, Microondas,Aires Aconcicionados...",
                    "status": "active"
                },
                "varietyDetails": [
                    {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "VarietyEquipinfras_id": 2
                    },
                    {
                        "id": 4,
                        "name": "InstaView Door-in-Door",
                        "description": "26cu.ft - LS74SXS",
                        "VarietyEquipinfras_id": 2
                    }
                ]
            }
        ]
    }
}
```
---

### Variety Detail

#### http://localhost:12225/api/varietydetail (POST)

Add one VarietyDetail

**REQUEST**
Headers: `x-access-token`
``` json
{
    "VarietyEquipinfraId":"8",
    "name": "model abc",
    "description": "Description of model abc "
}

```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Detalle de Variedad creado exitosamente."
    },
    "varietyDetail": {
        "id": 9,
        "name": "model abc",
        "description": "description of model abc",
        "VarietyEquipinfras_id": 8
    }
}
```
---

#### http://localhost:12225/api/varietydetail/:id (PUT)

Update one Variety Detail

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 9

``` json
{
	"description": "another description of model abc"
}
```
**Note**: The id is of varietyDetails
          Is possible to update one or all atrributes of the Variety Detail.

**RESPONSE**
``` json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Detalle de Variedad modificado exitosamente."
    },
    "varietyDetail": {
        "id": 9,
        "name": "model abc",
        "description": "Another description of model abc",
        "VarietyEquipinfras_id": 8
    }
}
```
---


#### http://localhost:12225/api/varietydetail/:id (GET)

Get one Variety Detail

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 1

**RESPONSE**
``` json
{
    "status": true,
    "message": {
        "code": 200
    },
    "varietyDetail": {
        "id": 1,
        "name": "Turbodrum Fuzzy Logic",
        "description": "12kg",
        "VarietyEquipinfras_id": 1
    }
}
```
---


#### http://localhost:12225/api/varietydetail/:id/service (PUT)

Set the Service Details to a Variety Detail.

* Note: All the services associated must passed, old and news. Any ID not passed will be unassociated.

**REQUEST**
Headers: `x-access-token`
```json
{
	"services": [1,3]
}
```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "varietyDetail": {
        "id": 1,
        "name": "Turbodrum Fuzzy Logic",
        "description": "12kg",
        "VarietyEquipinfraId": 1,
        "serviceDetail": [
            {
                "id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
                "estimatedPrice": 1000,
                "estimatedWarrantyTime": 21,
                "note": "Reparación de motor de lavadora.",
                "status": "active"
            },
            {
                "id": 3,
                "name": "Reparación de Tarjeta Madre",
                "serviceType": "Reparación",
                "estimatedPrice": 900,
                "estimatedWarrantyTime": 14,
                "note": "Reparación de Tarjeta Madre.",
                "status": "active"
            }
        ]
    }
}
```

---

#### http://localhost:12225/api/varietydetail/:id (DELETE)

Delete one Variety Detail

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 9

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Detalle de Variedad eliminado exitosamente."
    }
}
```
---

#### http://localhost:12225/api/varietydetail/:id/service (GET)

Return the Service Details associated to a Variety Detail.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "varietyDetail": {
        "id": 1,
        "name": "Turbodrum Fuzzy Logic",
        "description": "12kg",
        "VarietyEquipinfraId": 1,
        "serviceDetail": [
            {
                "id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
                "estimatedPrice": 1000,
                "estimatedWarrantyTime": 21,
                "note": "Reparación de motor de lavadora.",
                "status": "active"
            },
            {
                "id": 2,
                "name": "Mantenimiento de motor",
                "serviceType": "Mantenimiento",
                "estimatedPrice": 800,
                "estimatedWarrantyTime": 7,
                "note": "Mantenimiento de motor de lavadora.",
                "status": "active"
            }
        ]
    }
}
```

---

### Catalogue

#### http://localhost:12225/api/catalogue (GET)

Get the general catalogue, all categories and all subcategories.

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "categories": [
        {
            "id": 1,
            "name": "Electrodomesticos",
            "description": "Lavadora, Microondas, Neveras...",
            "status": "active",
            "subcategories": [
                {
                    "id": 1,
                    "name": "Linea Blanca",
                    "description": "Neveras, Microondas,Aires Aconcicionados...",
                    "status": "active"
                },
                {
                    "id": 2,
                    "name": "Linea Marron",
                    "description": "Televisor, Reproductor de Audio...",
                    "status": "active"
                },
                {
                    "id": 3,
                    "name": "Otros",
                    "description": "Otros..",
                    "status": "active"
                },
                {
                    "id": 10,
                    "name": "Another Subcategory  Name",
                    "description": "Another Description",
                    "status": "active"
                }
            ]
        },
        {
            "id": 2,
            "name": "Pintura",
            "description": "Interiores, Exteriores",
            "status": "active",
            "subcategories": [
                {
                    "id": 4,
                    "name": "Gotele",
                    "description": "Gotele exterior, Gotele interior",
                    "status": "active"
                },
                {
                    "id": 5,
                    "name": "General",
                    "description": "interior, exterior",
                    "status": "active"
                }
            ]
        },
        {
            "id": 3,
            "name": "Plomeria",
            "description": "Desatascos, Tuberias de interiores y exteriores",
            "status": "active",
            "subcategories": [
                {
                    "id": 6,
                    "name": "Tuberias",
                    "description": "Lavamanos, Lavaplatos, Inodoros, Duchas",
                    "status": "active"
                },
                {
                    "id": 7,
                    "name": "General",
                    "status": "active"
                }
            ]
        },
        {
            "id": 4,
            "name": "Albañileria",
            "description": "Paredes, Pisos de interiores y exteriores",
            "status": "active",
            "subcategories": [
                {
                    "id": 8,
                    "name": "Macro",
                    "description": "Paredes, Techos, Pisos...",
                    "status": "active"
                },
                {
                    "id": 9,
                    "name": "Micro",
                    "description": "Barras...",
                    "status": "active"
                }
            ]
        }
    ]
}

```
---

#### http://localhost:12225/api/catalogue/subcategory/:id (GET)

Get the first specific catalogue, get all the equipinfras of one subcategory choose.

**REQUEST**
Path Variables: id = 1

**Note**: The id is of subcategories

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "subcategory": {
        "id": 1,
        "name": "Linea Blanca",
        "description": "Neveras, Microondas,Aires Aconcicionados...",
        "status": "active",
        "category": {
            "id": 1,
            "name": "Electrodomesticos",
            "description": "Lavadora, Microondas, Neveras...",
            "status": "active"
        },
        "equipinfras": [
            {
                "id": 1,
                "name": "Lavadora",
                "type": "E",
                "image_url": "http://someDirection",
                "description": "Another description ",
                "status": "active",
                "varieties": [
                    {
                        "id": 1,
                        "name": "LG",
                        "description": "Tvs, aires acondicionados..",
                        "VarietyEquipinfras_id": 1,
                        "status": "active",
                        "varietyDetails": [
                            {
                                "id": 2,
                                "name": "Turbodrum Fuzzy Logic",
                                "description": "6Kg",
                                "status": "active"
                            },
                            {
                                "id": 1,
                                "name": "Turbodrum Fuzzy Logic",
                                "description": "12kg",
                                "status": "active"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Frigilux",
                        "description": "Neveras, aires acondicionados..",
                        "VarietyEquipinfras_id": 3,
                        "status": "active",
                        "varietyDetails": [
                            {
                                "id": 6,
                                "name": "50UK6300PSB TV UHD, 4K",
                                "description": " 50\" ThinQ AI",
                                "status": "active"
                            },
                            {
                                "id": 5,
                                "name": "55SK8500PDA TV Super UHD, 4K",
                                "description": "55\" ThinQ AI",
                                "status": "active"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 2,
                "name": "Nevera",
                "type": "E",
                "image_url": "http://someDirection",
                "description": "neveras",
                "status": "active",
                "varieties": [
                    {
                        "id": 1,
                        "name": "LG",
                        "description": "Tvs, aires acondicionados..",
                        "VarietyEquipinfras_id": 2,
                        "status": "active",
                        "varietyDetails": [
                            {
                                "id": 4,
                                "name": "InstaView Door-in-Door",
                                "description": "26cu.ft - LS74SXS",
                                "status": "active"
                            },
                            {
                                "id": 3,
                                "name": " InstaView Door-in-Door",
                                "description": "31 cu.ft. - GM84SXDB",
                                "status": "active"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Frigilux",
                        "description": "Neveras, aires acondicionados..",
                        "VarietyEquipinfras_id": 4,
                        "status": "active",
                        "varietyDetails": []
                    }
                ]
            },
            {
                "id": 3,
                "name": "Aire Acondicionado",
                "type": "E",
                "image_url": "http://someDirection",
                "description": "Aires Acondicionados",
                "status": "active",
                "varieties": []
            }
        ]
    }
}
```
---

#### http://localhost:12225/api/catalogue/equipinfras/:id (GET)

Get the second specific catalogue, get all the varieties and varietyDetails of one Equipinfras choose.

**REQUEST**
Path Variables: id = 1

**Note**: The id is of equipinfras

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "equipinfras": {
        "id": 1,
        "name": "Lavadora",
        "image_url": "http://someDirection",
        "description": "lavadora",
        "status": "active",
        "subcategory": {
            "id": 1,
            "name": "Linea Blanca",
            "description": "Neveras, Microondas,Aires Aconcicionados...",
            "status": "active"
        },
        "variety": [
            {
                "id": 1,
                "name": "LG",
                "description": "Tvs, aires acondicionados..",
                "status": "active",
                "VarietyEquipinfras_id": 1,
                "varietyDetails": [
                    {
                        "id": 1,
                        "name": "modelo 1",
                        "description": "description modelo 1",
                        "status": "active",
                        "VarietyEquipinfras_id": 1
                    },
                    {
                        "id": 2,
                        "name": "modelo 1.1",
                        "description": "description modelo 1.1",
                        "status": "active",
                        "VarietyEquipinfras_id": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Frigilux",
                "description": "Neveras, aires acondicionados..",
                "status": "active",
                "VarietyEquipinfras_id": 3,
                "varietyDetails": [
                    {
                        "id": 5,
                        "name": "modelo 3",
                        "description": "description modelo 3",
                        "status": "active",
                        "VarietyEquipinfras_id": 3
                    },
                    {
                        "id": 6,
                        "name": "modelo 3.3",
                        "description": "description modelo 3.3",
                        "status": "active",
                        "VarietyEquipinfras_id": 3
                    }
                ]
            }
        ]
    }
}
```
---

#### http://localhost:12225/api/catalogue/:n (GET)

Get All Equipinfras by name "n".

**REQUEST**
Path Variables: n = "lava".

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "equipinfras": [
        {
            "id": 1,
            "name": "Lavadora",
            "image_url": "http://someDirection",
            "description": "lavadora",
            "status": "active"
        },
        {
            "id": 10,
            "name": "Lavamanos",
            "image_url": "http://someDirection",
            "description": "Lavamanos",
            "status": "active"
        }
    ]
}
```
---

### Activity

#### http://localhost:12225/api/activity (POST)

Create one Activity.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Destapar el Equipo",
	"description": "Se debe destapar el equipo con mucho cuidado.",
	"estimatedTime": 1,
	"difficultyDegree": "Media"
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Actividad creada exitosamente."
	},
	"activity": {
		"id": 4,
		"name": "Destapar el Equipo",
		"description": "Se debe destapar el equipo con mucho cuidado.",
		"estimatedTime": 1,
		"difficultyDegree": "Media",
		"createdAt": 1566403466091,
		"updatedAt": 1566403466091,
		"status": "active",
		"serviceDetails": []
	}
}
```

---

#### http://localhost:12225/api/activity/:id (PUT)

Update one Activity.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Cambiar pieza averiada"
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Actividad modificada exitosamente."
  },
	"activity": {
		"id": 2,
		"name": "Cambiar pieza averiada",
		"description": "Se sacar la pieza dañana utilizando el destornillador.",
		"estimatedTime": 5,
		"difficultyDegree": "Alta",
		"createdAt": 1566355080594,
		"updatedAt": 1566355080594,
		"status": "active",
		"serviceDetails": [
			{
				"id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
				"estimatedPrice": 1000,
				"estimatedWarrantyTime": 21,
				"note": "Reparación de motor de lavadora.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			}
		]
	}
}
```

---

#### http://localhost:12225/api/activity/:id (DELETE)

Delete one Activity.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Actividad eliminado exitosamente."
	}
}
```

---




#### http://localhost:12225/api/activity (GET)

Get all Activities.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"activities": [
		{
			"id": 1,
			"name": "Destapar el Equipo",
			"description": "Se debe destapar el equipo con mucho cuidado.",
			"estimatedTime": 1,
			"difficultyDegree": "Media",
			"createdAt": 1566355080594,
			"updatedAt": 1566355080594,
			"status": "active",
			"serviceDetails": [
				{
					"id": 1,
                    "name": "Reparación de motor",
                    "serviceType": "Reparación",
					"estimatedPrice": 1000,
					"estimatedWarrantyTime": 21,
					"note": "Reparación de motor de lavadora.",
					"createdAt": 1566355080693,
					"updatedAt": 1566355080693,
					"status": "active"
				},
				{
					"id": 3,
                    "name": "Reparación de Tarjeta Madre",
                    "serviceType": "Reparación",
					"estimatedPrice": 900,
					"estimatedWarrantyTime": 14,
					"note": "Reparación de Tarjeta Madre.",
					"createdAt": 1566355080693,
					"updatedAt": 1566355080693,
					"status": "active"
				}
			]
		},
		{
			"id": 2,
			"name": "Sacar la pieza dañada",
			"description": "Se sacar la pieza dañana utilizando el destornillador.",
			"estimatedTime": 5,
			"difficultyDegree": "Alta",
			"createdAt": 1566355080594,
			"updatedAt": 1566355080594,
			"status": "active",
			"serviceDetails": []
		}
	]
}
```

---

#### http://localhost:12225/api/activity/:id (GET)

Get one activity.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
			"code": 200
	},
	"activity": {
		"id": 2,
		"name": "Sacar la pieza dañada",
		"description": "Se sacar la pieza dañana utilizando el destornillador.",
		"estimatedTime": 5,
		"difficultyDegree": "Alta",
		"createdAt": 1566355080594,
		"updatedAt": 1566355080594,
		"status": "active",
		"serviceDetails": [
			{
				"id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
				"estimatedPrice": 1000,
				"estimatedWarrantyTime": 21,
				"note": "Reparación de motor de lavadora.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			}
		]
	}
}
```

---

### Component

#### http://localhost:12225/api/component (POST)

Create one Component.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Lapto Lenovo",
	"description": "Lapto Lenovo LP-101."
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Componente creada exitosamente."
	},
	"component": {
		"id": 4,
		"name": "Lapto Lenovo",
		"description": "Lapto Lenovo LP-101.",
		"createdAt": 1566405903822,
		"updatedAt": 1566405903822,
		"status": "active",
		"serviceDetails": []
	}
}
```

---

#### http://localhost:12225/api/component/:id (PUT)

Update one Component.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Mother Card"
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Componente modificada exitosamente."
	},
	"component": {
		"id": 2,
		"name": "Mother Card",
		"description": "Tarjeta Madre de Lavadora.",
		"createdAt": 1566355080630,
		"updatedAt": 1566404893099,
		"status": "active",
		"serviceDetails": [
			{
				"id": 3,
                "name": "Reparación de Tarjeta Madre",
                "serviceType": "Reparación",
				"estimatedPrice": 900,
				"estimatedWarrantyTime": 14,
				"note": "Reparación de Tarjeta Madre.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			}
		]
	}
}
```

---

#### http://localhost:12225/api/component/:id (DELETE)

Delete one Component.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Componente eliminado exitosamente"
	}
}
```

---

#### http://localhost:12225/api/component (GET)

Get all Components.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"components": [
		{
			"id": 2,
			"name": "Tarjeta Madre",
			"description": "Tarjeta Madre de Lavadora.",
			"createdAt": 1566355080630,
			"updatedAt": 1566355080630,
			"status": "active",
			"serviceDetails": [
				{
					"id": 3,
                    "name": "Reparación de Tarjeta Madre",
                    "serviceType": "Reparación",
					"estimatedPrice": 900,
					"estimatedWarrantyTime": 14,
					"note": "Reparación de Tarjeta Madre.",
					"createdAt": 1566355080693,
					"updatedAt": 1566355080693,
					"status": "active"
				}
			]
		},
		{
			"id": 3,
			"name": "Pila",
			"description": "Pila de Lavadora.",
			"createdAt": 1566355080630,
			"updatedAt": 1566355080630,
			"status": "active",
			"serviceDetails": []
		}
	]
}
```

---

#### http://localhost:12225/api/component/:id (GET)

Get one Component.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"component": {
		"id": 2,
		"name": "Tarjeta Madre",
		"description": "Tarjeta Madre de Lavadora.",
		"createdAt": 1566355080630,
		"updatedAt": 1566355080630,
		"status": "active",
		"serviceDetails": [
			{
				"id": 3,
                "name": "Reparación de Tarjeta Madre",
                "serviceType": "Reparación",
				"estimatedPrice": 900,
				"estimatedWarrantyTime": 14,
				"note": "Reparación de Tarjeta Madre.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			}
		]
	}
}
```

---

### Policy

#### http://localhost:12225/api/policy (POST)

Create one Policy.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Pared mal pintada",
	"description": "Cubre paredes veteadas o paredes manchadas de pintura de otra pared.",
	"actionPlan": "Retocar la zona de la pared pintada indebidamente."
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Política creada exitosamente."
	},
	"policy": {
		"id": 5,
		"name": "Pared mal pintada",
		"description": "Cubre paredes veteadas o paredes manchadas de pintura de otra pared.",
		"actionPlan": "Retocar la zona de la pared pintada indebidamente.",
		"createdAt": 1566408101466,
		"updatedAt": 1566408101466,
		"status": "active",
		"serviceDetails": []
	}
}
```

---

#### http://localhost:12225/api/policy/:id (PUT)

Update one Policy.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Mother Card"
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Pieza averiada por el prestado"
	},
	"policy": {
		"id": 2,
		"name": "Pieza averiada por el prestado",
		"description": "Política que se activa cuando se determina que un componente del electrodoméstico fue averiado por el prestador pero existe la posibilidad de repararse.",
		"actionPlan": "Reparación de la pieza y de no proceder, sustitución por una nueva.",
		"createdAt": 1566355080523,
		"updatedAt": 1566407879662,
		"status": "active",
		"serviceDetails": [
			{
				"id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
				"estimatedPrice": 1000,
				"estimatedWarrantyTime": 21,
				"note": "Reparación de motor de lavadora.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			},
			{
				"id": 3,
                "name": "Reparación de Tarjeta Madre",
                "serviceType": "Reparación",
				"estimatedPrice": 900,
				"estimatedWarrantyTime": 14,
				"note": "Reparación de Tarjeta Madre.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			}
		]
	}
}
```

---


#### http://localhost:12225/api/policy/:id (DELETE)

Delete one Policy.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Política eliminado exitosamente"
	}
}
```

---

#### http://localhost:12225/api/policy (GET)

Get all Policies.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"policies": [
		{
			"id": 1,
			"name": "Pieza rota por el prestador",
			"description": "Política que se activa cuando en la revisión por garantía se determina que el prestador de servicio estropeó alguna pieza del electrodoméstico",
			"actionPlan": "Reinstalación de una nueva pieza.",
			"createdAt": 1566355080523,
			"updatedAt": 1566355080523,
			"status": "active",
			"serviceDetails": [
				{
					"id": 3,
                    "name": "Reparación de Tarjeta Madre",
                    "serviceType": "Reparación",
					"estimatedPrice": 900,
0					"estimatedWarrantyTime": 14,
					"note": "Reparación de Tarjeta Madre.",
					"createdAt": 1566355080693,
					"updatedAt": 1566355080693,
					"status": "active"
				}
			]
		},
		{
			"id": 3,
			"name": "Pared mal pintada",
			"description": "Cubre paredes veteadas o paredes manchadas de pintura de otra pared",
			"actionPlan": "Retocar la zona de la pared pintada indebidamente.",
			"createdAt": 1566355080523,
			"updatedAt": 1566355080523,
			"status": "active",
			"serviceDetails": []
		}
	]
}
```

---

#### http://localhost:12225/api/policy/:id (GET)

Get one Policy.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"policy": {
		"id": 3,
		"name": "Pared mal pintada",
		"description": "Cubre paredes veteadas o paredes manchadas de pintura de otra pared",
		"actionPlan": "Retocar la zona de la pared pintada indebidamente.",
		"createdAt": 1566355080523,
		"updatedAt": 1566355080523,
		"status": "active",
		"serviceDetails": []
	}
}
```

---

### Resource

#### http://localhost:12225/api/resource (POST)

Create one Resource.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Destornillador de Estria",
	"description": "Destornillador de Estria, marca black & decker.",
	"resourceType": "Material",
	"price": 10000,
	"measureUnit": "Unidades"
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Recurso creada exitosamente."
	},
	"resource": {
		"id": 4,
		"name": "Destornillador de Estria",
		"description": "Destornillador de Estria, marca black & decker.",
		"resourceType": "Material",
		"measureUnit": "Unidades",
		"price": 10000,
		"createdAt": 1566409169155,
		"updatedAt": 1566409169155,
		"status": "active",
		"serviceDetails": []
	}
}
```

---

#### http://localhost:12225/api/resource/:id (PUT)

Update one Resource.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Mother Card"
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
    "text": "Recurso modificada exitosamente."
	},
	"resource": {
		"id": 1,
		"name": "Destornillador de Paleta",
    "description": "Destornillador de Paleta, marca black & decker.",
		"resourceType": "Material",
		"measureUnit": "Unidades",
		"price": 10000,
		"createdAt": 1566355080557,
		"updatedAt": 1566355080557,
		"status": "active",
		"serviceDetails": [
			{
				"id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
				"estimatedPrice": 1000,
				"estimatedWarrantyTime": 21,
				"note": "Reparación de motor de lavadora.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			}
		]
	}
}
```

---

#### http://localhost:12225/api/resource/:id (DELETE)

Delete one Resource.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Recurso eliminado exitosamente."
	}
}
```

---

#### http://localhost:12225/api/resource (GET)

Get all Resources.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"resources": [
		{
			"id": 2,
			"name": "Martillo",
			"description": "Martillos marca tramontina.",
			"resourceType": "Material",
			"measureUnit": "Unidades",
			"price": 3000,
			"createdAt": 1566355080557,
			"updatedAt": 1566355080557,
			"status": "active",
			"serviceDetails": [
				{
					"id": 1,
                    "name": "Reparación de motor",
                    "serviceType": "Reparación",
					"estimatedPrice": 1000,
					"estimatedWarrantyTime": 21,
					"note": "Reparación de motor de lavadora.",
					"createdAt": 1566355080693,
					"updatedAt": 1566355080693,
					"status": "active"
				}
			]
		},
		{
			"id": 3,
			"name": "Compresor de aire",
			"description": "Compresor De Aire Apollo. 1.5 Hp. 24 Litros.",
			"resourceType": "Equipo",
			"measureUnit": "Unidades",
			"price": 100000,
			"createdAt": 1566355080557,
			"updatedAt": 1566355080557,
			"status": "active",
			"serviceDetails": []
		}
	]
}
```

---

#### http://localhost:12225/api/resource/:id (GET)

Get one Resource.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"resource": {
		"id": 1,
		"name": "Destornillador de Estria",
		"description": "Destornillador de Estria, marca black & decker.",
		"resourceType": "Material",
		"measureUnit": "Unidades",
		"price": 10000,
		"createdAt": 1566355080557,
		"updatedAt": 1566355080557,
		"status": "active",
		"serviceDetails": [
			{
				"id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
				"estimatedPrice": 1000,
				"estimatedWarrantyTime": 21,
				"note": "Reparación de motor de lavadora.",
				"createdAt": 1566355080693,
				"updatedAt": 1566355080693,
				"status": "active"
			}
		]
	}
}
```

---


### Service Detail

#### http://localhost:12225/api/serviceDetail (POST)

Create one Service Detail.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Reparación de motor",
    "note": "Reparación de motor de lavadora.",
    "serviceType": "Reparación",
	"ComponentId": 1,
	"estimatedPrice": 1000,
	"estimatedWarrantyTime": 21
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Detalle Servicio creada exitosamente."
	},
	"serviceDetail": {
		"id": 5,
        "name": "Reparación de motor",
        "serviceType": "Reparación",
		"estimatedPrice": 1000,
		"estimatedWarrantyTime": 21,
		"note": "Reparación de motor de lavadora.",
		"createdAt": 1566412203849,
		"updatedAt": 1566412203849,
		"status": "active",
		"component": {
				"id": 1,
				"name": "Motor",
				"description": "Motor de Lavadora.",
				"createdAt": 1566355080630,
				"updatedAt": 1566355080630,
				"status": "active"
		},
		"activities": [],
		"resources": [],
		"policies": [],
        "skills": []
	}
}
```

---

#### http://localhost:12225/api/serviceDetail/:id (PUT)

Update one Service Detail.

**REQUEST**
Headers: `x-access-token`

* Note: In the array of elements you must include all the associations (old and new). By example, if you had (1,2,3) and want to add (4) and delete (2), you must send (1,3,4).
```json
{
    "activities": [1, 3],
    "policies": [1, 2],
	"resources": [
		{
			"id": 1,
			"quantity": 1
		},
		{
			"id": 2,
			"quantity": 3
		}
    ],
    "skills": [1, 2]
}
```

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Detalle Servicio modificada exitosamente."
	},
	"serviceDetail": {
		"id": 3,
        "name": "Reparación de Tarjeta Madre",
        "serviceType": "Reparación",
		"estimatedPrice": 900,
		"estimatedWarrantyTime": 14,
		"note": "Reparación de Tarjeta Madre.",
		"createdAt": 1566355080693,
		"updatedAt": 1566355080693,
		"status": "active",
		"component": {
			"id": 2,
			"name": "Lapto Lenovo",
			"description": "Lapto Lenovo LP-101.",
			"createdAt": 1566355080630,
			"updatedAt": 1566405891963,
			"status": "active"
		},
		"activities": [
			{
				"id": 1,
				"name": "Destapar el Equipo",
				"description": "Se debe destapar el equipo con mucho cuidado.",
				"estimatedTime": 1,
				"difficultyDegree": "Media",
				"createdAt": 1566355080594,
				"updatedAt": 1566355080594,
				"status": "active"
			},
			{
				"id": 3,
				"name": "Colocar la pieza nueva en su lugar",
				"description": "Se debe colocar la pienza nueva en reemplazo de la dañada.",
				"estimatedTime": 1,
				"difficultyDegree": "Alta",
				"createdAt": 1566355080594,
				"updatedAt": 1566403811172,
				"status": "active"
			}
		],
		"resources": [
			{
				"id": 2,
				"name": "Martillo",
				"description": "Martillos marca tramontina.",
				"resourceType": "Material",
				"measureUnit": "Unidades",
				"price": 3000,
				"createdAt": 1566355080557,
				"updatedAt": 1566355080557,
				"status": "active",
				"quantity": 3
			},
			{
				"id": 1,
				"name": "Destornillador de Paleta",
				"description": "Destornillador de Paleta, marca black & decker.",
				"resourceType": "Material",
				"measureUnit": "Unidades",
				"price": 10000,
				"createdAt": 1566355080557,
				"updatedAt": 1566408705002,
				"status": "active",
				"quantity": 1
			}
        ],
        "skills": [
            {
                "id": 2,
                "name": "Técnico",
                "description": "Repara aparatos eléctricos.",
                "status": "active"
            }
        ],
		"policies": [
			{
				"id": 1,
				"name": "Pieza rota por el prestador",
				"description": "Política que se activa cuando en la revisión por garantía se determina que el prestador de servicio estropeó alguna pieza del electrodoméstico",
				"actionPlan": "Reinstalación de una nueva pieza.",
				"createdAt": 1566355080523,
				"updatedAt": 1566355080523,
				"status": "active"
			},
			{
				"id": 2,
				"name": "Pieza averiada por el prestado",
				"description": "Política que se activa cuando se determina que un componente del electrodoméstico fue averiado por el prestador pero existe la posibilidad de repararse.",
				"actionPlan": "Reparación de la pieza y de no proceder, sustitución por una nueva.",
				"createdAt": 1566355080523,
				"updatedAt": 1566407879662,
				"status": "active"
			}
		]
	}
}
```

---


#### http://localhost:12225/api/serviceDetail/:id (DELETE)

Delete one Service Detail.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200,
		"text": "Detalle Servicio eliminado exitosamente."
	}
}
```
---

#### http://localhost:12225/api/serviceDetail (GET)

Get all Services Detail.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"serviceDetails": [
		{
			"id": 1,
            "name": "Reparación de motor",
            "serviceType": "Reparación",
			"estimatedPrice": 1000,
			"estimatedWarrantyTime": 21,
			"note": "Reparación de motor de lavadora.",
			"createdAt": 1566355080693,
			"updatedAt": 1566355080693,
			"status": "active",
			"Component": {
				"id": 1,
				"name": "Motor",
				"description": "Motor de Lavadora.",
				"createdAt": 1566355080630,
				"updatedAt": 1566355080630,
				"status": "active"
			},
			"activities": [
				{
					"id": 3,
					"name": "Colocar la pieza nueva en su lugar",
					"description": "Se debe colocar la pienza nueva en reemplazo de la dañada.",
					"estimatedTime": 1,
					"difficultyDegree": "Alta",
					"createdAt": 1566355080594,
					"updatedAt": 1566403811172,
					"status": "active"
				},
				{
					"id": 2,
					"name": "Cambiar pieza averiada",
					"description": "Se sacar la pieza dañana utilizando el destornillador.",
					"estimatedTime": 5,
					"difficultyDegree": "Alta",
					"createdAt": 1566355080594,
					"updatedAt": 1566400537773,
					"status": "active"
				}
            ],
            "skills": [
                {
                    "id": 2,
                    "name": "Técnico",
                    "description": "Repara aparatos eléctricos.",
                    "status": "active"
                }
            ],
			"resources": [
				{
					"id": 1,
					"name": "Destornillador de Paleta",
					"description": "Destornillador de Paleta, marca black & decker.",
					"resourceType": "Material",
					"measureUnit": "Unidades",
					"price": 10000,
					"createdAt": 1566355080557,
					"updatedAt": 1566408705002,
					"status": "active",
					"quantity": 2
				},
				{
					"id": 2,
					"name": "Martillo",
					"description": "Martillos marca tramontina.",
					"resourceType": "Material",
					"measureUnit": "Unidades",
					"price": 3000,
					"createdAt": 1566355080557,
					"updatedAt": 1566355080557,
					"status": "active",
					"quantity": 1
				}
			],
			"policies": [
				{
					"id": 1,
					"name": "Pieza rota por el prestador",
					"description": "Política que se activa cuando en la revisión por garantía se determina que el prestador de servicio estropeó alguna pieza del electrodoméstico",
					"actionPlan": "Reinstalación de una nueva pieza.",
					"createdAt": 1566355080523,
					"updatedAt": 1566355080523,
					"status": "active"
				},
				{
					"id": 2,
					"name": "Pieza averiada por el prestado",
					"description": "Política que se activa cuando se determina que un componente del electrodoméstico fue averiado por el prestador pero existe la posibilidad de repararse.",
					"actionPlan": "Reparación de la pieza y de no proceder, sustitución por una nueva.",
					"createdAt": 1566355080523,
					"updatedAt": 1566407879662,
					"status": "active"
				}
			]
		},
		{
			"id": 2,
            "name": "Mantenimiento de motor",
            "serviceType": "Mantenimiento",
			"estimatedPrice": 800,
			"estimatedWarrantyTime": 7,
			"note": "Mantenimiento de motor de lavadora.",
			"createdAt": 1566355080693,
			"updatedAt": 1566355080693,
			"status": "active",
			"Component": {
					"id": 1,
					"name": "Motor",
					"description": "Motor de Lavadora.",
					"createdAt": 1566355080630,
					"updatedAt": 1566355080630,
					"status": "active"
			},
			"activities": [],
			"resources": [],
            "policies": [],
            "skills": []
		}
	]
}
```

---

#### http://localhost:12225/api/serviceDetail/:id (GET)

Get one Service Detail.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
	"status": true,
	"message": {
		"code": 200
	},
	"serviceDetail": {
		"id": 2,
            "name": "Mantenimiento de motor",
            "serviceType": "Mantenimiento",
			"estimatedPrice": 800,
			"estimatedWarrantyTime": 7,
			"note": "Mantenimiento de motor de lavadora.",
			"createdAt": 1566355080693,
			"updatedAt": 1566355080693,
			"status": "active",
			"Component": {
					"id": 1,
					"name": "Motor",
					"description": "Motor de Lavadora.",
					"createdAt": 1566355080630,
					"updatedAt": 1566355080630,
					"status": "active"
			},
			"activities": [],
			"resources": [],
			"policies": [
				{
					"id": 1,
					"name": "Pieza rota por el prestador",
					"description": "Política que se activa cuando en la revisión por garantía se determina que el prestador de servicio estropeó alguna pieza del electrodoméstico",
					"actionPlan": "Reinstalación de una nueva pieza.",
					"createdAt": 1566355080523,
					"updatedAt": 1566355080523,
					"status": "active"
				}
			],
            "skills": []
	}
}
```

---

### Skill

#### http://localhost:12225/api/skill (POST)

Create a Skill.

**REQUEST**
Headers: `x-access-token`
```json
{
	"name": "Carpinteria",
	"description": "Trabajos en madera y conglomerado."
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Habilidad creada exitosamente."
    },
    "skill": {
        "id": 5,
        "name": "Carpinteria",
        "description": "Trabajos en madera y conglomerado.",
        "status": "active",
        "serviceDetails": [],
        "users": []
    }
}
```

---

#### http://localhost:12225/api/skill/:id (PUT)

Update a Skill.

**REQUEST**
Headers: `x-access-token`
```json
{
	"description": "Solo maderas."
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Habilidad modificada exitosamente."
    },
    "skill": {
        "id": 5,
        "name": "Carpinteria",
        "description": "Solo maderas.",
        "status": "active",
        "serviceDetails": [],
        "users": []
    }
}
```

---

#### http://localhost:12225/api/skill/:id (DELETE)

Delete a Skill.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Habilidad eliminada exitosamente."
    }
}
```

---

#### http://localhost:12225/api/skill (GET)

Get all Skills.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "skills": [
        {
            "id": 3,
            "name": "Albañil",
            "description": "Todo tipo de construcciones con bloques y cemento.",
            "status": "active",
            "serviceDetails": [],
            "users": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "gender": "Femenino",
                    "status": "active",
                    "experienceYears": 4
                }
            ]
        },
        {
            "id": 2,
            "name": "Técnico",
            "description": "Repara aparatos eléctricos.",
            "status": "active",
            "serviceDetails": [
                {
                    "id": 1,
                    "name": "Reparación de motor",
                    "serviceType": "Reparación",
                    "estimatedPrice": 1000,
                    "estimatedWarrantyTime": 21,
                    "note": "Reparación de motor de lavadora.",
                    "status": "active"
                }
            ],
            "users": [
                {
                    "id": 7,
                    "firstName": "Maria",
                    "lastName": "Suarez",
                    "gender": "Femenino",
                    "status": "active",
                    "experienceYears": 3
                },
            ]
        }
    ]
}
```

---

#### http://localhost:12225/api/skill/:id (GET)

Get a Skill.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "skill": {
        "id": 1,
        "name": "Pintor",
        "description": "Sabe pintar paredes, techos y rodapies.",
        "status": "active",
        "serviceDetails": [
            {
                "id": 1,
                "name": "Reparación de motor",
                "serviceType": "Reparación",
                "estimatedPrice": 1000,
                "estimatedWarrantyTime": 21,
                "note": "Reparación de motor de lavadora.",
                "status": "active"
            },
            {
                "id": 2,
                "name": "Mantenimiento de motor",
                "serviceType": "Mantenimiento",
                "estimatedPrice": 800,
                "estimatedWarrantyTime": 7,
                "note": "Mantenimiento de motor de lavadora.",
                "status": "active"
            }
        ],
        "users": [
            {
                "id": 2,
                "firstName": "Maria",
                "lastName": "Moreno",
                "gender": "Femenino",
                "status": "active",
                "experienceYears": 2
            }
        ]
    }
}
```

---




#### http://localhost:12225/api/skill/users/service (GET)

Given a list of Service Detail Ids, return the users who have the skills needed.

**REQUEST**
Headers: `x-access-token`
Params: Query array of ids.
Example of query: http://localhost:12225/api/skill/users/service?id=2&id=1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "users": [
        {
            "id": 2,
            "firstName": "Maria",
            "lastName": "Moreno",
            "gender": "Femenino",
						"status": "active",
						"skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                },
                {
                    "id": 2,
                    "name": "Técnico",
                    "description": "Repara aparatos eléctricos.",
                    "status": "active",
                    "experienceYears": 3
                }
            ]
        },
        {
            "id": 4,
            "firstName": "Maria",
            "lastName": "Perez",
            "gender": "Femenino",
						"status": "active",
						"skills": [
                {
                    "id": 2,
                    "name": "Técnico",
                    "description": "Repara aparatos eléctricos.",
                    "status": "active",
                    "experienceYears": 3
                }
            ]
        }
    ]
}
```

---

### Revision

#### http://localhost:12225/api/revision (POST)

Create a Request (Revision). And Add the correspondent Calendar

* Note: This method requires `multipart/form-data` to handle the upload of images.
* Help: If a Promotion apply for the Revision, pass the `PromotionId` in the array (This could be of type, `generic` or `target`). To evaluate if the promotion apply, the following services are available.
	- [Get Promotions By Subcategory](#httplocalhost12225apipromotionsubcategoryid-get)
	- [Get Promotions By Equipinfras And User](#httplocalhost12225apipromotionequipinfraseiduseruid-get)

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
```json
{
    "UserId": 1,
    "VarietyDetailId": 1,
    "LocationId": 1,
	"description": "Mi lavadora esta descompuesta, no lava",
    "imageRequestUrl": "public/images/avatar/avatardefault.png",
    "PromotionId": 1,
    "calendars": [{
		"type": "revision",
		"date": "2019-08-01",
        "turn": "morning",
        "LenderId": 2
    }]

}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Solicitud creada exitosamente."
    },
    "revision": {
        "id": 5,
        "description": "Mi Nevera, se congela y no enfria",
        "imageRequestUrl": "public/images/avatar/avatardefault.png",
        "price": 1000,
        "createdAt": 1571356781527,
        "updatedAt": 1571356781527,
        "status": "requested",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 3,
            "name": " InstaView Door-in-Door",
            "description": "31 cu.ft. - GM84SXDB",
            "varietyEquipinfraId": 2
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        }
    },
    "calendars": [
        {
            "id": 1,
            "type": "revision",
            "date": "2019-10-18",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ]
        }
    ],
    "bitacoras": [
        {
            "id": 1,
            "type": "revision",
            "eventType": "request",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 2,
            "type": "revision",
            "eventType": "requestEvaluation",
            "status": "pending",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        }
    ]
}
```

---

#### http://localhost:12225/api/revision/warranty/:serviceOrderId (POST)

Create a Request (Revision) for Warranty. And Add the correspondent Calendar

* Note: This method requires `multipart/form-data` to handle the upload of images.

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
```json
{
	"description": "Mi lavadora esta descompuesta, no lava nuevamente",
    "imageRequestUrl": "public/images/avatar/avatardefault.png",
    "calendars": [{
		"type": "revision",
		"date": "2019-08-04",
        "turn": "morning",
        "LenderId": 2
	}]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Solicitud por Garantía creada exitosamente."
    },
    "revision": {
        "id": 12,
        "description": "Mi lavadora esta descompuesta, no lava nuevamente",
        "imageRequestUrl": "public/images/avatar/avatardefault.png",
        "price": 1000,
        "isForGuarantee": true,
        "createdAt": 1574017713394,
        "updatedAt": 1574017713394,
        "status": "requested",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 1,
            "name": "Turbodrum Fuzzy Logic",
            "description": "12kg",
            "varietyEquipinfraId": 1,
            "variety": {
                "id": 1,
                "name": "LG"
            },
            "Equipinfra": {
                "id": 1,
                "name": "Lavadora"
            }
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        }
    },
    "calendar": {
        "id": 4,
        "type": "revision",
        "date": "2019-08-05",
        "turn": "morning",
        "status": "booked",
        "lender": {
            "id": 2,
            "firstName": "Maria",
            "lastName": "Moreno",
            "email": "maria@gmail.com",
            "role": 2,
            "status": "active"
        }
    },
    "bitacoras": [
        {
            "id": 7,
            "type": "revision",
            "eventType": "request",
            "status": "ready",
            "RevisionId": 12,
            "motive": {}
        },
        {
            "id": 8,
            "type": "revision",
            "eventType": "requestEvaluation",
            "status": "pending",
            "RevisionId": 12,
            "motive": {}
        }
    ]
}
```

---


#### http://localhost:12225/api/revision/:id (PUT)

Update a Revision.

* Note: This method requires `multipart/form-data` to handle the upload of images.

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
```json
{
    "description": "Mi Nevera NO ENFRIA Y SE CONGELA",
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Solicitud creada exitosamente."
    },
    "revision": {
        "id": 5,
        "description": "Mi Nevera NO ENFRIA Y SE CONGELA",
        "imageRequestUrl": "public/images/avatar/avatardefault.png",
        "price": 1000,
        "createdAt": 1571356781527,
        "updatedAt": 1571356781527,
        "status": "requested",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 3,
            "name": " InstaView Door-in-Door",
            "description": "31 cu.ft. - GM84SXDB",
            "varietyEquipinfraId": 2
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        }
    },
    "calendars": [
        {
            "id": 1,
            "type": "revision",
            "date": "2019-10-18",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ]
        }
    ],
    "bitacoras": [
        {
            "id": 1,
            "type": "revision",
            "eventType": "request",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 2,
            "type": "revision",
            "eventType": "requestEvaluation",
            "status": "pending",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        }
    ]
}
```

---





#### http://localhost:12225/api/revision (GET)

Get all Revisions.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "revisions": [
        {
            "id": 4,
            "description": "Estoy presentado problemas con mi lavadora de mi mama",
            "price": 1000,
            "createdAt": 1571958598354,
            "updatedAt": 1571958598354,
            "status": "diagnosticated",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [],
            "bitacoras": []
        },
        {
            "id": 3,
            "description": "Estoy presentado problemas con mi lavadora de nuevo",
            "price": 1000,
            "createdAt": 1571958598354,
            "updatedAt": 1571958598354,
            "status": "requested",
            "user": {
                "id": 2,
                "email": "maria@gmail.com",
                "firstName": "Maria",
                "lastName": "Moreno",
                "dni": 2345678,
                "dniType": "v",
                "dateOfBirth": "1994-12-24",
                "gender": "Femenino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 2,
                "address": "Urb Santa Isabe la Playa, Calle 7 entre 1 y 2",
                "state": "Lara",
                "city": "Barquisimeto",
                "postalCode": "3001",
                "UserId": 2
            },
            "calendars": [],
            "bitacoras": []
        },
        {
            "id": 2,
            "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta",
            "price": 1000,
            "createdAt": 1571958598354,
            "updatedAt": 1571958598354,
            "status": "finalized",
            "user": {
                "id": 2,
                "email": "maria@gmail.com",
                "firstName": "Maria",
                "lastName": "Moreno",
                "dni": 2345678,
                "dniType": "v",
                "dateOfBirth": "1994-12-24",
                "gender": "Femenino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 2,
                "address": "Urb Santa Isabe la Playa, Calle 7 entre 1 y 2",
                "state": "Lara",
                "city": "Barquisimeto",
                "postalCode": "3001",
                "UserId": 2
            },
            "calendars": [],
            "bitacoras": []
        },
        {
            "id": 1,
            "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta",
            "price": 1000,
            "createdAt": 1571958598354,
            "updatedAt": 1571958598354,
            "status": "finalized",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [],
            "bitacoras": []
        }
    ]
}
```
---




#### http://localhost:12225/api/revision/warranty/all (GET)

Get all Revisions For Warranty.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "revisions": [
        {
            "id": 12,
            "description": "Mi lavadora esta descompuesta, no lava nuevamente",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "isForGuarantee": true,
            "createdAt": 1574017713394,
            "updatedAt": 1574017713394,
            "status": "requested",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [
                {
                    "id": 4,
                    "type": "revision",
                    "date": "2019-08-05",
                    "turn": "morning",
                    "status": "booked",
                    "lenders": [
                        {
                            "id": 2,
                            "firstName": "Maria",
                            "lastName": "Moreno",
                            "email": "maria@gmail.com",
                            "role": 2,
                            "status": "active"
                        }
                    ]
                }
            ],
            "bitacoras": [
                {
                    "id": 7,
                    "type": "revision",
                    "eventType": "request",
                    "status": "ready",
                    "RevisionId": 12,
                    "motive": {}
                },
                {
                    "id": 8,
                    "type": "revision",
                    "eventType": "requestEvaluation",
                    "status": "pending",
                    "RevisionId": 12,
                    "motive": {}
                }
            ]
        },
        {
            "id": 11,
            "description": "Mi lavadora esta descompuesta, no lava nuevamente",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "isForGuarantee": true,
            "createdAt": 1574017707052,
            "updatedAt": 1574017707052,
            "status": "requested",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [],
            "bitacoras": []
        },
        {
            "id": 10,
            "description": "Mi lavadora esta descompuesta, no lava nuevamente",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "isForGuarantee": true,
            "createdAt": 1574016404672,
            "updatedAt": 1574016404672,
            "status": "requested",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [
                {
                    "id": 3,
                    "type": "revision",
                    "date": "2019-08-04",
                    "turn": "morning",
                    "status": "booked",
                    "lenders": [
                        {
                            "id": 2,
                            "firstName": "Maria",
                            "lastName": "Moreno",
                            "email": "maria@gmail.com",
                            "role": 2,
                            "status": "active"
                        }
                    ]
                }
            ],
            "bitacoras": [
                {
                    "id": 6,
                    "type": "revision",
                    "eventType": "requestEvaluation",
                    "status": "pending",
                    "RevisionId": 10,
                    "motive": {}
                },
                {
                    "id": 5,
                    "type": "revision",
                    "eventType": "request",
                    "status": "ready",
                    "RevisionId": 10,
                    "motive": {}
                }
            ]
        },
        {
            "id": 9,
            "description": "Mi lavadora esta descompuesta, no lava nuevamente",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "isForGuarantee": true,
            "createdAt": 1574016395745,
            "updatedAt": 1574016395745,
            "status": "requested",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [],
            "bitacoras": []
        },
        {
            "id": 5,
            "description": "Estoy presentado problemas con mi lavadora de nuevamente luego de la reparación",
            "price": 1000,
            "isForGuarantee": true,
            "createdAt": 1573999764852,
            "updatedAt": 1573999764852,
            "status": "requested",
            "user": {
                "id": 2,
                "email": "maria@gmail.com",
                "firstName": "Maria",
                "lastName": "Moreno",
                "dni": 2345678,
                "dniType": "v",
                "dateOfBirth": "1994-12-24",
                "gender": "Femenino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 2,
                "address": "Urb Santa Isabe la Playa, Calle 7 entre 1 y 2",
                "state": "Lara",
                "city": "Barquisimeto",
                "postalCode": "3001",
                "UserId": 2
            },
            "calendars": [],
            "bitacoras": []
        }
    ]
}
```
---

#### http://localhost:12225/api/revision/:id (GET)

Get a Revision.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "revision": {
        "id": 1,
        "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta",
        "price": 1000,
        "createdAt": 1571958598354,
        "updatedAt": 1571958598354,
        "status": "finalized",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 1,
            "name": "Turbodrum Fuzzy Logic",
            "description": "12kg",
            "varietyEquipinfraId": 1,
            "variety": {
                "id": 1,
                "name": "LG"
            },
            "Equipinfra": {
                "id": 1,
                "name": "Lavadora"
            }
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        }
    },
    "calendars": [],
    "bitacoras": []
}
```

---


#### http://localhost:12225/api/revision/user/:userId (GET)

Get all Revisions by user.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "revisions": [
        {
            "id": 4,
            "description": "Estoy presentado problemas con mi lavadora de mi mama",
            "price": 1000,
            "createdAt": 1571958598354,
            "updatedAt": 1571958598354,
            "status": "diagnosticated",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [],
            "bitacoras": []
        },
        {
            "id": 1,
            "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta",
            "price": 1000,
            "createdAt": 1571958598354,
            "updatedAt": 1571958598354,
            "status": "finalized",
            "user": {
                "id": 1,
                "email": "gilberto@gmail.com",
                "firstName": "Gilberto",
                "lastName": "Perez",
                "dni": 1234567,
                "dniType": "v",
                "dateOfBirth": "1994-07-13",
                "gender": "Masculino",
                "status": "active"
            },
            "varietyDetail": {
                "id": 1,
                "name": "Turbodrum Fuzzy Logic",
                "description": "12kg",
                "varietyEquipinfraId": 1,
                "variety": {
                    "id": 1,
                    "name": "LG"
                },
                "Equipinfra": {
                    "id": 1,
                    "name": "Lavadora"
                }
            },
            "location": {
                "id": 1,
                "address": "UrbTarabana II, Sector II, Calle 16",
                "state": "Lara",
                "city": "Cabudare",
                "postalCode": "3023",
                "isLivingPlace": true,
                "UserId": 1
            },
            "calendars": [],
            "bitacoras": []
        }
    ]
}
```

---



#### http://localhost:12225/api/revision/lender/:lenderId (GET)

Get all Revisions by Lender.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "lender": {
        "id": 2,
        "firstName": "Maria",
        "lastName": "Moreno",
        "gender": "Femenino",
        "status": "active",
        "revisions": [
            {
                "id": 5,
                "description": "Mi lavadora esta descompuesta, no lava",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "requested",
                "userId": 1,
                "varietyDetail": {
                    "id": 1,
                    "name": "Turbodrum Fuzzy Logic",
                    "description": "12kg"
                },
                "calendar": {
                    "id": 1,
                    "type": "revision",
                    "date": "2019-08-01",
                    "turn": "morning",
                    "status": "booked"
                }
            },
            {
                "id": 6,
                "description": "Mi lavadora esta descompuesta, no sirve",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "requested",
                "userId": 1,
                "varietyDetail": {
                    "id": 2,
                    "name": "Turbodrum Fuzzy Logic",
                    "description": "6Kg"
                },
                "calendar": {
                    "id": 2,
                    "type": "revision",
                    "date": "2019-08-03",
                    "turn": "morning",
                    "status": "booked"
                }
            }
        ]
    }
}
```

---


#### http://localhost:12225/api/revision/:id (DELETE)

Cancel a Revision.

* Note: The Revision state should be `requested` or `approved`.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Revisión cancelada exitosamente."
    }
}
```

---


#### http://localhost:12225/api/revision/:id/approve (PUT)

Approve a Request.

* Note: The Revision state should be `requested`.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Revisión aprobada exitosamente."
    },
    "revision": {
        "id": 5,
        "description": "Mi Nevera, se congela y no enfria",
        "imageRequestUrl": "public/images/avatar/avatardefault.png",
        "price": 1000,
        "createdAt": 1571356781527,
        "updatedAt": 1571357408961,
        "status": "approved",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 3,
            "name": " InstaView Door-in-Door",
            "description": "31 cu.ft. - GM84SXDB",
            "varietyEquipinfraId": 2
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        }
    },
    "calendars": [
        {
            "id": 1,
            "type": "revision",
            "date": "2019-10-18",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ]
        }
    ],
    "bitacoras": [
        {
            "id": 1,
            "type": "revision",
            "eventType": "request",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 2,
            "type": "revision",
            "eventType": "requestEvaluation",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 3,
            "type": "revision",
            "eventType": "execution",
            "status": "pending",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        }
    ]
}
```

---



#### http://localhost:12225/api/revision/:id/diagnose (PUT)

Diagnose a Revision.

* Note: The Revision state should be `approved`

**REQUEST**
Headers: `x-access-token`
```json
{
	"nota": "Se ha determinado que la falla esta en falta de gas. Es un mantenimiento correctivo realizable por la empresa."
}
```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Revisión diagnosticada exitosamente."
    },
    "revision": {
        "id": 5,
        "description": "Mi Nevera, se congela y no enfria",
        "imageRequestUrl": "public/images/avatar/avatardefault.png",
        "price": 1000,
        "createdAt": 1571356781527,
        "updatedAt": 1571357573972,
        "status": "diagnosticated",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 3,
            "name": " InstaView Door-in-Door",
            "description": "31 cu.ft. - GM84SXDB",
            "varietyEquipinfraId": 2
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        }
    },
    "calendars": [
        {
            "id": 1,
            "type": "revision",
            "date": "2019-10-18",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ]
        }
    ],
    "bitacoras": [
        {
            "id": 1,
            "type": "revision",
            "eventType": "request",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 2,
            "type": "revision",
            "eventType": "requestEvaluation",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 3,
            "type": "revision",
            "eventType": "execution",
            "description": "Se ha determinado que la falla esta en falta de gas. Es un mantenimiento correctivo realizable por la empresa. ",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 4,
            "type": "revision",
            "eventType": "closure",
            "description": "Se ha determinado que la falla esta en falta de gas. Es un mantenimiento correctivo realizable por la empresa. ",
            "status": "pending",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        }
    ]
}
```

---



#### http://localhost:12225/api/revision/:id/irreparable/:motiveId (PUT)

Mark like Irreparable a Revision.

* Note: The Revision state should be `diagnosticated`

**REQUEST**
Headers: `x-access-token`
```json
{
	"nota": "Se ha determinado que la falla es irreparable."
}
```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Revisión marcada como irreparable exitosamente."
    },
    "revision": {
        "id": 19,
        "description": "Mi lavadora esta descompuesta, no lava",
        "imageRequestUrl": "public/images/avatar/avatardefault.png",
        "price": 1000,
        "createdAt": 1572404371802,
        "updatedAt": 1572404668244,
        "status": "irreparable",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 1,
            "name": "Turbodrum Fuzzy Logic",
            "description": "12kg",
            "varietyEquipinfraId": 1
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        },
        "calendars": [
            {
                "id": 2,
                "type": "revision",
                "date": "2019-08-02",
                "turn": "morning",
                "status": "booked",
                "lenders": [
                    {
                        "id": 2,
                        "firstName": "Maria",
                        "lastName": "Moreno",
                        "email": "maria@gmail.com",
                        "role": 2,
                        "status": "active"
                    }
                ]
            }
        ],
        "bitacoras": [
            {
                "id": 1,
                "type": "revision",
                "eventType": "request",
                "status": "ready",
                "RevisionId": 19,
                "motive": {
                    "id": 1,
                    "name": "Irreparable",
                    "description": "Totalmente Dañado"
                }
            },
            {
                "id": 2,
                "type": "revision",
                "eventType": "requestEvaluation",
                "status": "ready",
                "RevisionId": 19,
                "motive": {
                    "id": 1,
                    "name": "Irreparable",
                    "description": "Totalmente Dañado"
                }
            },
            {
                "id": 3,
                "type": "revision",
                "eventType": "execution",
                "status": "ready",
                "RevisionId": 19,
                "motive": {
                    "id": 1,
                    "name": "Irreparable",
                    "description": "Totalmente Dañado"
                }
            },
            {
                "id": 4,
                "type": "revision",
                "eventType": "closure",
                "status": "cancel",
                "RevisionId": 19,
                "motive": {
                    "id": 1,
                    "name": "Irreparable",
                    "description": "Totalmente Dañado"
                }
            }
        ]
    }
}
```

---


#### http://localhost:12225/api/revision/:id/reject/:motiveId (PUT)

Reject a Revision.

* Note: The Revision state should be `requested` or `diagnosticated`

**REQUEST**
Headers: `x-access-token`
```json
{
	"nota": "No tenemos los materiales adecuados para ejecutar el mantenimiento."
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Revisión diagnosticada exitosamente."
    },
    "revision": {
        "id": 5,
        "description": "Mi Nevera, se congela y no enfria",
        "imageRequestUrl": "public/images/avatar/avatardefault.png",
        "price": 1000,
        "createdAt": 1571356781527,
        "updatedAt": 1571357573972,
        "status": "diagnosticated",
        "user": {
            "id": 1,
            "email": "gilberto@gmail.com",
            "firstName": "Gilberto",
            "lastName": "Perez",
            "dni": 1234567,
            "dniType": "v",
            "dateOfBirth": "1994-07-13",
            "gender": "Masculino",
            "status": "active"
        },
        "varietyDetail": {
            "id": 3,
            "name": " InstaView Door-in-Door",
            "description": "31 cu.ft. - GM84SXDB",
            "varietyEquipinfraId": 2
        },
        "location": {
            "id": 1,
            "address": "UrbTarabana II, Sector II, Calle 16",
            "state": "Lara",
            "city": "Cabudare",
            "postalCode": "3023",
            "isLivingPlace": true,
            "UserId": 1
        }
    },
    "calendars": [
        {
            "id": 1,
            "type": "revision",
            "date": "2019-10-18",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ]
        }
    ],
    "bitacoras": [
        {
            "id": 1,
            "type": "revision",
            "eventType": "request",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 2,
            "type": "revision",
            "eventType": "requestEvaluation",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 3,
            "type": "revision",
            "eventType": "execution",
            "description": "Se ha determinado que la falla esta en falta de gas. Es un mantenimiento correctivo realizable por la empresa. ",
            "status": "ready",
            "RevisionId": 5,
            "motive": {
                "id": 1,
                "name": "Generic",
                "description": "No motive"
            }
        },
        {
            "id": 4,
            "type": "revision",
            "eventType": "closure",
            "description": "No tenemos los materiales adecuados para ejecutar el mantenimiento",
            "status": "cancel",
            "RevisionId": 5,
            "motive": {
                "id": 2,
                "name": "Irreparable",
                "description": "Totalmente Dañado"
            }
        }
    ]
}
```

---

### Service Order

#### http://localhost:12225/api/serviceOrder (POST)

Create a Budget (Service Order).

* Note: This method requires `multipart/form-data` to handle the upload of images.
* Note: The Revision state should be `diagnosticated`

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
```json
{
	"RevisionId": 4,
	"warrantyTime": 15,
	"amount": 3000,
	"serviceOrderDetails": [{
		"ServiceDetailId": 2,
		"duration": 9,
		"amount": 6000
	}]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Presupuesto creado exitosamente."
    },
    "serviceOrder": {
        "id": 3,
        "code": "SIB1571360616403",
        "amount": 3000,
        "warrantyTime": 15,
        "createdAt": 1571360616402,
        "updatedAt": 1571360616402,
        "status": "budgeted",
        "revision": {
            "id": 11,
            "description": "Mi Nevera, se congela y no enfria",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "createdAt": 1571360375273,
            "status": "finalized"
        },
        "serviceOrderDetails": [
            {
                "id": 5,
                "ServiceDetailId": 2,
                "ServiceOrderId": 3,
                "duration": 1,
                "createdAt": 1571360616414,
                "updatedAt": 1571360616414,
                "status": "approved",
                "ServiceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "estimatedPrice": 800,
                    "estimatedWarrantyTime": 7,
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "note": "Mantenimiento de motor de lavadora.",
                    "ComponentId": 1
                },
                "calendars": []
            }
        ],
        "bitacoras": [
            {
                "id": 23,
                "type": "serviceOrder",
                "eventType": "budget",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 24,
                "type": "serviceOrder",
                "eventType": "budgetEvaluation",
                "status": "pending",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            }
        ]
    }
}
```

---




#### http://localhost:12225/api/serviceOrder/:id (PUT)

Update a Service Order.

* Note: This method requires `multipart/form-data` to handle the upload of images.

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`
```json
{
	"warrantyTime": 15,
	"serviceOrderDetails": [{
		"ServiceDetailId": 2,
		"duration": 9,
		"amount": 6000
	}, {
		"id": 2,
        "ServiceDetailId": 2,
        "ServiceOrderId": 2,
        "duration": 14,
        "status": "rejected"
	}]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Orden de Servicio modificada exitosamente."
    },
    "serviceOrder": {
        "id": 2,
        "code": "SIB15681561657332",
        "amount": 3000,
        "warrantyTime": 15,
        "createdAt": 1568156165733,
        "updatedAt": 1568165128621,
        "status": "budgeted",
        "revision": {
            "id": 3,
            "description": "Estoy presentado problemas con mi lavadora de nuevo",
            "price": 5000,
            "createdAt": 1568156165678,
            "status": "finalized"
        },
        "serviceOrderDetails": [
            {
                "id": 3,
                "ServiceDetailId": 1,
                "ServiceOrderId": 2,
                "duration": 15,
                "createdAt": 1568156165822,
                "updatedAt": 1568156165822,
                "status": "approved"
            }
        ]
    }
}
```

---





#### http://localhost:12225/api/serviceOrder (GET)

Get all Service Orders.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "serviceOrders": [
        {
            "id": 3,
            "code": "SIB1571360616403",
            "amount": 3000,
            "warrantyTime": 15,
            "createdAt": 1571360616402,
            "updatedAt": 1571360616402,
            "status": "budgeted",
            "revision": {
                "id": 11,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "createdAt": 1571360375273,
                "status": "finalized"
            },
            "serviceOrderDetails": [
                {
                    "id": 5,
                    "ServiceDetailId": 2,
                    "ServiceOrderId": 3,
                    "duration": 1,
                    "createdAt": 1571360616414,
                    "updatedAt": 1571360616414,
                    "status": "approved",
                    "ServiceDetail": {
                        "id": 2,
                        "name": "Mantenimiento de motor",
                        "estimatedPrice": 800,
                        "estimatedWarrantyTime": 7,
                        "serviceType": "Mantenimiento",
                        "status": "active",
                        "note": "Mantenimiento de motor de lavadora.",
                        "ComponentId": 1
                    },
                    "calendars": []
                }
            ],
            "bitacoras": [
                {
                    "id": 24,
                    "type": "serviceOrder",
                    "eventType": "budgetEvaluation",
                    "status": "pending",
                    "ServiceOrderId": 3,
                    "motive": {
                        "id": 1,
                        "name": "Generic",
                        "description": "No motive"
                    }
                },
                {
                    "id": 23,
                    "type": "serviceOrder",
                    "eventType": "budget",
                    "status": "ready",
                    "ServiceOrderId": 3,
                    "motive": {
                        "id": 1,
                        "name": "Generic",
                        "description": "No motive"
                    }
                }
            ]
        },
        {
            "id": 2,
            "code": "SIB15713561848882",
            "amount": 2000,
            "warrantyTime": 30,
            "createdAt": 1571356184888,
            "updatedAt": 1571356184888,
            "status": "budgeted",
            "revision": {
                "id": 2,
                "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta",
                "price": 1000,
                "createdAt": 1571356184849,
                "status": "finalized"
            },
            "serviceOrderDetails": [
                {
                    "id": 2,
                    "ServiceDetailId": 2,
                    "ServiceOrderId": 2,
                    "duration": 14,
                    "createdAt": 1571356184914,
                    "updatedAt": 1571356184914,
                    "status": "approved",
                    "ServiceDetail": {
                        "id": 2,
                        "name": "Mantenimiento de motor",
                        "estimatedPrice": 800,
                        "estimatedWarrantyTime": 7,
                        "serviceType": "Mantenimiento",
                        "status": "active",
                        "note": "Mantenimiento de motor de lavadora.",
                        "ComponentId": 1
                    },
                    "calendars": []
                },
                {
                    "id": 3,
                    "ServiceDetailId": 1,
                    "ServiceOrderId": 2,
                    "duration": 15,
                    "createdAt": 1571356184914,
                    "updatedAt": 1571356184914,
                    "status": "approved",
                    "ServiceDetail": {
                        "id": 1,
                        "name": "Reparación de motor",
                        "estimatedPrice": 1000,
                        "estimatedWarrantyTime": 21,
                        "serviceType": "Reparación",
                        "status": "active",
                        "note": "Reparación de motor de lavadora.",
                        "ComponentId": 1
                    },
                    "calendars": []
                }
            ],
            "bitacoras": []
        },
        {
            "id": 1,
            "code": "SIB15713561848881",
            "amount": 1000,
            "warrantyTime": 15,
            "createdAt": 1571356184888,
            "updatedAt": 1571356184888,
            "status": "budgeted",
            "revision": {
                "id": 1,
                "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta",
                "price": 1000,
                "createdAt": 1571356184849,
                "status": "finalized"
            },
            "serviceOrderDetails": [
                {
                    "id": 1,
                    "ServiceDetailId": 2,
                    "ServiceOrderId": 1,
                    "duration": 8,
                    "createdAt": 1571356184914,
                    "updatedAt": 1571356184914,
                    "status": "approved",
                    "ServiceDetail": {
                        "id": 2,
                        "name": "Mantenimiento de motor",
                        "estimatedPrice": 800,
                        "estimatedWarrantyTime": 7,
                        "serviceType": "Mantenimiento",
                        "status": "active",
                        "note": "Mantenimiento de motor de lavadora.",
                        "ComponentId": 1
                    },
                    "calendars": []
                }
            ],
            "bitacoras": []
        }
    ]
}
```

---

#### http://localhost:12225/api/serviceOrder/:id (GET)

Get a Serice Order.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "serviceOrder": {
        "id": 3,
        "code": "SIB1571360616403",
        "amount": 3000,
        "warrantyTime": 15,
        "createdAt": 1571360616402,
        "updatedAt": 1571360616402,
        "status": "budgeted",
        "revision": {
            "id": 11,
            "description": "Mi Nevera, se congela y no enfria",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "createdAt": 1571360375273,
            "status": "finalized"
        },
        "serviceOrderDetails": [
            {
                "id": 5,
                "ServiceDetailId": 2,
                "ServiceOrderId": 3,
                "duration": 1,
                "createdAt": 1571360616414,
                "updatedAt": 1571360616414,
                "status": "approved",
                "ServiceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "estimatedPrice": 800,
                    "estimatedWarrantyTime": 7,
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "note": "Mantenimiento de motor de lavadora.",
                    "ComponentId": 1
                },
                "calendars": []
            }
        ],
        "bitacoras": [
            {
                "id": 23,
                "type": "serviceOrder",
                "eventType": "budget",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 24,
                "type": "serviceOrder",
                "eventType": "budgetEvaluation",
                "status": "pending",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            }
        ]
    }
}
```

---


#### http://localhost:12225/api/serviceOrder/user/:userId (GET)

Get all Service Orders by user.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "serviceOrders": [
        {
            "id": 3,
            "code": "SIB1571360616403",
            "amount": 3000,
            "warrantyTime": 15,
            "createdAt": 1571360616402,
            "updatedAt": 1571360616402,
            "status": "budgeted",
            "revision": {
                "id": 11,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "createdAt": 1571360375273,
                "status": "finalized"
            },
            "serviceOrderDetails": [
                {
                    "id": 5,
                    "ServiceDetailId": 2,
                    "ServiceOrderId": 3,
                    "duration": 1,
                    "createdAt": 1571360616414,
                    "updatedAt": 1571360616414,
                    "status": "approved",
                    "ServiceDetail": {
                        "id": 2,
                        "name": "Mantenimiento de motor",
                        "estimatedPrice": 800,
                        "estimatedWarrantyTime": 7,
                        "serviceType": "Mantenimiento",
                        "status": "active",
                        "note": "Mantenimiento de motor de lavadora.",
                        "ComponentId": 1
                    },
                    "calendars": []
                }
            ],
            "bitacoras": [
                {
                    "id": 23,
                    "type": "serviceOrder",
                    "eventType": "budget",
                    "status": "ready",
                    "ServiceOrderId": 3,
                    "motive": {
                        "id": 1,
                        "name": "Generic",
                        "description": "No motive"
                    }
                },
                {
                    "id": 24,
                    "type": "serviceOrder",
                    "eventType": "budgetEvaluation",
                    "status": "pending",
                    "ServiceOrderId": 3,
                    "motive": {
                        "id": 1,
                        "name": "Generic",
                        "description": "No motive"
                    }
                }
            ]
        },
        {
            "id": 1,
            "code": "SIB15713561848881",
            "amount": 1000,
            "warrantyTime": 15,
            "createdAt": 1571356184888,
            "updatedAt": 1571356184888,
            "status": "budgeted",
            "revision": {
                "id": 1,
                "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta",
                "price": 1000,
                "createdAt": 1571356184849,
                "status": "finalized"
            },
            "serviceOrderDetails": [
                {
                    "id": 1,
                    "ServiceDetailId": 2,
                    "ServiceOrderId": 1,
                    "duration": 8,
                    "createdAt": 1571356184914,
                    "updatedAt": 1571356184914,
                    "status": "approved",
                    "ServiceDetail": {
                        "id": 2,
                        "name": "Mantenimiento de motor",
                        "estimatedPrice": 800,
                        "estimatedWarrantyTime": 7,
                        "serviceType": "Mantenimiento",
                        "status": "active",
                        "note": "Mantenimiento de motor de lavadora.",
                        "ComponentId": 1
                    },
                    "calendars": []
                }
            ],
            "bitacoras": []
        }
    ]
}
```

---


#### http://localhost:12225/api/serviceOrder/:id (DELETE)

Cancel a Service Order.

* Note: The Service Order state should be `requested`,`approved` or `warranty`.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Orden de Servicio cancelada exitosamente."
    }
}
```

---



#### http://localhost:12225/api/serviceOrder/:id/approve (PUT)

Approve a Request.

* Note: The Service Order state should be `budgeted`.

**REQUEST**
Headers: `Content-Type: multipart/form-data`, `x-access-token`

```json
{
	"serviceOrderDetails": [{
		"id": 54,
		"ServiceDetailId": 2,
		"duration": 9,
		"amount": 6000,
		"calendars": [{
			"type": "serviceOrderDetail",
			"date": "2019-05-03",
	        "turn": "morning",
	        "LenderId": 2
		}, {
			"type": "serviceOrderDetail",
			"date": "2019-05-04",
	        "turn": "morning",
	        "LenderId": 2
		}]
	}]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Orden de Servicio aprobada exitosamente."
    },
    "serviceOrder": {
        "id": 3,
        "code": "SIB1571360616403",
        "amount": 3000,
        "warrantyTime": 15,
        "createdAt": 1571360616402,
        "updatedAt": 1571361302308,
        "status": "approved",
        "revision": {
            "id": 11,
            "description": "Mi Nevera, se congela y no enfria",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "createdAt": 1571360375273,
            "status": "finalized"
        },
        "serviceOrderDetails": [
            {
                "id": 5,
                "ServiceDetailId": 2,
                "ServiceOrderId": 3,
                "duration": 1,
                "createdAt": 1571360616414,
                "updatedAt": 1571360616414,
                "status": "approved",
                "ServiceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "estimatedPrice": 800,
                    "estimatedWarrantyTime": 7,
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "note": "Mantenimiento de motor de lavadora.",
                    "ComponentId": 1
                },
                "calendars": []
            }
        ],
        "bitacoras": [
            {
                "id": 23,
                "type": "serviceOrder",
                "eventType": "budget",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 24,
                "type": "serviceOrder",
                "eventType": "budgetEvaluation",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 25,
                "type": "serviceOrder",
                "eventType": "schedule",
                "status": "pending",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            }
        ]
    }
}
```

---



#### http://localhost:12225/api/serviceOrder/:id/warranty (PUT)

Add Warranty to a Service Order.

* Note: The Service Order state should be `approved`

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Orden de Servicio entra en garantía exitosamente."
    },
    "serviceOrder": {
        "id": 3,
        "code": "SIB1571369115947",
        "amount": 3000,
        "warrantyTime": 15,
        "reason": "la razon de la gantia",
        "createdAt": 1571369115945,
        "updatedAt": 1571373109183,
        "status": "warranty",
        "revision": {
            "id": 5,
            "description": "Mi lavadora esta descompuesta, no lava",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "createdAt": 1571368911755,
            "status": "finalized"
        },
        "serviceOrderDetails": [
            {
                "id": 5,
                "ServiceDetailId": 2,
                "ServiceOrderId": 3,
                "duration": 1,
                "createdAt": 1571369115959,
                "updatedAt": 1571369115959,
                "status": "approved",
                "ServiceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "estimatedPrice": 800,
                    "estimatedWarrantyTime": 7,
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "note": "Mantenimiento de motor de lavadora.",
                    "ComponentId": 1
                },
                "calendars": [
                    {
                        "id": 3,
                        "type": "serviceOrderDetail",
                        "date": "2019-10-28",
                        "turn": "afternoon",
                        "status": "booked",
                        "lenders": [
                            {
                                "id": 2,
                                "firstName": "Maria",
                                "lastName": "Moreno",
                                "email": "maria@gmail.com",
                                "role": 2,
                                "status": "active"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "type": "serviceOrderDetail",
                        "date": "2019-10-28",
                        "turn": "morning",
                        "status": "executed",
                        "lenders": [
                            {
                                "id": 2,
                                "firstName": "Maria",
                                "lastName": "Moreno",
                                "email": "maria@gmail.com",
                                "role": 2,
                                "status": "active"
                            }
                        ]
                    }
                ]
            }
        ],
        "bitacoras": [
            {
                "id": 5,
                "type": "serviceOrder",
                "eventType": "budget",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 6,
                "type": "serviceOrder",
                "eventType": "budgetEvaluation",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 7,
                "type": "serviceOrder",
                "eventType": "schedule",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 8,
                "type": "serviceOrder",
                "eventType": "execution",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 10,
                "type": "serviceOrder",
                "eventType": "warranty",
                "description":"la razon de la garantia",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 11,
                "type": "serviceOrder",
                "eventType": "closure",
                "status": "pending",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            }
        ]
    }
}
```
---



#### http://localhost:12225/api/serviceOrder/:id/reject/:motiveId (PUT)

Reject a Service Order.

* Note: The Revision state should be `budgeted`

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Orden de Servicio rechazada exitosamente."
    },
    "serviceOrder": {
        "id": 2,
        "code": "SIB1568169011370",
        "amount": 3000,
        "warrantyTime": 15,
        "reason": "No estoy conforme con el servicio, volvio a presentar problemas a la semana de haberlo reparado",
        "createdAt": 1568156165733,
        "updatedAt": 1568169011364,
        "status": "rejected",
        "revision": {
            "id": 3,
            "description": "Estoy presentado problemas con mi lavadora de nuevo",
            "price": 5000,
            "createdAt": 1568156165678,
            "status": "finalized"
        },
        "serviceOrderDetails": [
            {
                "id": 3,
                "ServiceDetailId": 1,
                "ServiceOrderId": 2,
                "duration": 15,
                "createdAt": 1568156165822,
                "updatedAt": 1568156165822,
                "status": "approved"
            }
        ]
    }
}
```
---


### Lender

* Note: This uses the same User model.

#### http://localhost/:12225/api/lender:id (PUT)

Set the skills to the Lender. All skills associated must be passed in the array or the will be unassociated.

**REQUEST**
Headers: `x-access-token`
```json
{
	"skills": [2,3]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Prestador modificado exitosamente."
    },
    "lender": {
        "id": 9,
        "firstName": "Maria",
        "lastName": "Melendez",
        "gender": "Femenino",
        "status": "active",
        "skills": [
            {
                "id": 2,
                "name": "Técnico",
                "description": "Repara aparatos eléctricos.",
                "status": "active"
            },
            {
                "id": 3,
                "name": "Albañil",
                "description": "Todo tipo de construcciones con bloques y cemento.",
                "status": "active"
            }
        ]
    }
}
```

---

#### http://localhost:12225/api/lender (GET)

Get all lenders with their skills.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "lenders": [
        {
            "id": 2,
            "firstName": "Maria",
            "lastName": "Moreno",
            "gender": "Femenino",
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                },
                {
                    "id": 2,
                    "name": "Técnico",
                    "description": "Repara aparatos eléctricos.",
                    "status": "active",
                    "experienceYears": 3
                },
                {
                    "id": 3,
                    "name": "Albañil",
                    "description": "Todo tipo de construcciones con bloques y cemento.",
                    "status": "active",
                    "experienceYears": 4
                }
            ]
        },
        {
            "id": 4,
            "firstName": "Maria",
            "lastName": "Perez",
            "gender": "Femenino",
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
				}
		]
}
```

---

#### http://localhost:12225/api/lender/:id (GET)

Get a lenders with his skills.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "lender": {
        "id": 2,
        "firstName": "Maria",
        "lastName": "Moreno",
        "gender": "Femenino",
        "status": "active",
        "skills": [
            {
                "id": 1,
                "name": "Pintor",
                "description": "Sabe pintar paredes, techos y rodapies.",
                "status": "active",
                "experienceYears": 2
            },
            {
                "id": 2,
                "name": "Técnico",
                "description": "Repara aparatos eléctricos.",
                "status": "active",
                "experienceYears": 3
            },
            {
                "id": 3,
                "name": "Albañil",
                "description": "Todo tipo de construcciones con bloques y cemento.",
                "status": "active",
                "experienceYears": 4
            }
        ]
    }
}
```

---

#### http://localhost:12225/api/lender/availability/:id (GET)

Get a lender availability.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "lender": {
        "id": 2,
        "email": "maria@gmail.com",
        "firstName": "Maria",
        "lastName": "Moreno",
        "dni": 2345678,
        "dniType": "v",
        "dateOfBirth": "1994-12-24",
        "gender": "Femenino",
        "status": "active",
        "calendar": [
        {
            "id": 1,
            "type": "revision",
            "date": "2019-08-01",
            "turn": "morning",
            "status": "booked"
        },
        {
            "id": 2,
            "type": "serviceOrderDetail",
            "date": "2019-08-02",
            "turn": "morning",
            "status": "booked"
        },
        {
            "id": 3,
            "type": "serviceOrderDetail",
            "date": "2019-08-06",
            "turn": "morning",
            "status": "booked"
        },
        {
            "id": 4,
            "type": "serviceOrderDetail",
            "date": "2019-08-09",
            "turn": "morning",
            "status": "booked"
        }]
    }
}
```

---

### Calendar

#### http://localhost:12225/api/calendar (GET)

Get all Services registrys of Calendar whith the respective lender.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "calendaries": [
        {
            "id": 1,
            "type": "revision",
            "date": "2019-10-18",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ],
            "revision": {
                "id": 5,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "rejected",
                "varietyDetail": {
                    "id": 3,
                    "name": " InstaView Door-in-Door",
                    "description": "31 cu.ft. - GM84SXDB",
                    "status": "active",
                    "VarietyEquipinfraId": 2
                }
            },
            "serviceOrderDetail": {
                "ServiceOrder": {},
                "ServiceDetail": {}
            }
        },
        {
            "id": 2,
            "type": "revision",
            "date": "2019-10-30",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ],
            "revision": {
                "id": 6,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "rejected",
                "varietyDetail": {
                    "id": 3,
                    "name": " InstaView Door-in-Door",
                    "description": "31 cu.ft. - GM84SXDB",
                    "status": "active",
                    "VarietyEquipinfraId": 2
                }
            },
            "serviceOrderDetail": {
                "ServiceOrder": {},
                "ServiceDetail": {}
            }
        },
        {
            "id": 3,
            "type": "revision",
            "date": "2019-10-20",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ],
            "revision": {
                "id": 7,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "rejected",
                "varietyDetail": {
                    "id": 3,
                    "name": " InstaView Door-in-Door",
                    "description": "31 cu.ft. - GM84SXDB",
                    "status": "active",
                    "VarietyEquipinfraId": 2
                }
            },
            "serviceOrderDetail": {
                "ServiceOrder": {},
                "ServiceDetail": {}
            }
        },
        {
            "id": 4,
            "type": "revision",
            "date": "2019-10-25",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ],
            "revision": {
                "id": 9,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "rejected",
                "varietyDetail": {
                    "id": 3,
                    "name": " InstaView Door-in-Door",
                    "description": "31 cu.ft. - GM84SXDB",
                    "status": "active",
                    "VarietyEquipinfraId": 2
                }
            },
            "serviceOrderDetail": {
                "ServiceOrder": {},
                "ServiceDetail": {}
            }
        },
        {
            "id": 5,
            "type": "revision",
            "date": "2019-10-24",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ],
            "revision": {
                "id": 11,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "finalized",
                "varietyDetail": {
                    "id": 3,
                    "name": " InstaView Door-in-Door",
                    "description": "31 cu.ft. - GM84SXDB",
                    "status": "active",
                    "VarietyEquipinfraId": 2
                }
            },
            "serviceOrderDetail": {
                "ServiceOrder": {},
                "ServiceDetail": {}
            }
        }
    ]
}

```
---

#### http://localhost:12225/api/calendar/:sDate/:eDate (GET)

Get all Registries of calendar in a range of dates.

**REQUEST**
Headers:  `x-access-token`
Path Variables: sDate = 2019-10-10, eDate = 2019-10-20

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "calendaries": [
        {
            "id": 4,
            "type": "revision",
            "date": "2019-10-18",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ],
            "revision": {
                "id": 5,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "rejected",
                "varietyDetail": {
                    "id": 3,
                    "name": " InstaView Door-in-Door",
                    "description": "31 cu.ft. - GM84SXDB",
                    "status": "active",
                    "VarietyEquipinfraId": 2
                }
            },
            "serviceOrderDetail": {
                "ServiceOrder": {},
                "ServiceDetail": {}
            }
        },
        {
            "id": 3,
            "type": "revision",
            "date": "2019-10-20",
            "turn": "morning",
            "status": "booked",
            "lenders": [
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "email": "maria@gmail.com",
                    "role": 2,
                    "status": "active"
                }
            ],
            "revision": {
                "id": 7,
                "description": "Mi Nevera, se congela y no enfria",
                "imageRequestUrl": "public/images/avatar/avatardefault.png",
                "price": 1000,
                "status": "rejected",
                "varietyDetail": {
                    "id": 3,
                    "name": " InstaView Door-in-Door",
                    "description": "31 cu.ft. - GM84SXDB",
                    "status": "active",
                    "VarietyEquipinfraId": 2
                }
            },
            "serviceOrderDetail": {
                "ServiceOrder": {},
                "ServiceDetail": {}
            }
        }
    ]
}
```
---

#### http://localhost:12225/api/calendar/:lenderId/:sDate/:eDate (GET)

Get all Services Registries of calendar of one lender in a range of dates.

**REQUEST**
Headers:  `x-access-token`
Path Variables: lenderId = 2, sDate = 2019-10-10, eDate = 2019-10-20

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "lender": {
        "id": 2,
        "firstName": "Maria",
        "lastName": "Moreno",
        "email": "maria@gmail.com",
        "role": 2,
        "status": "active",
        "lenderCalendaries": [
            {
                "id": 1,
                "type": "revision",
                "date": "2019-10-18",
                "turn": "morning",
                "status": "booked",
                "calendarId": 1,
                "revision": {
                    "id": 5,
                    "description": "Mi Nevera, se congela y no enfria",
                    "imageRequestUrl": "public/images/avatar/avatardefault.png",
                    "price": 1000,
                    "status": "rejected",
                    "varietyDetail": {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "status": "active"
                    }
                },
                "serviceOrderDetail": {
                    "ServiceOrder": {},
                    "ServiceDetail": {}
                }
            },
            {
                "id": 3,
                "type": "revision",
                "date": "2019-10-20",
                "turn": "morning",
                "status": "booked",
                "calendarId": 3,
                "revision": {
                    "id": 7,
                    "description": "Mi Nevera, se congela y no enfria",
                    "imageRequestUrl": "public/images/avatar/avatardefault.png",
                    "price": 1000,
                    "status": "rejected",
                    "varietyDetail": {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "status": "active"
                    }
                },
                "serviceOrderDetail": {
                    "ServiceOrder": {},
                    "ServiceDetail": {}
                }
            }
        ]
    }
}
```
---


#### http://localhost:12225/api/calendar/lender/:lenderId (GET)

Get all Services Registries of calendar of one lender.

**REQUEST**
Headers:  `x-access-token`
Path Variables: lenderId = 2.

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "lender": {
        "id": 2,
        "firstName": "Maria",
        "lastName": "Moreno",
        "email": "maria@gmail.com",
        "role": 2,
        "status": "active",
        "lenderCalendaries": [
            {
                "id": 1,
                "type": "revision",
                "date": "2019-10-18",
                "turn": "morning",
                "status": "booked",
                "calendarId": 1,
                "revision": {
                    "id": 5,
                    "description": "Mi Nevera, se congela y no enfria",
                    "imageRequestUrl": "public/images/avatar/avatardefault.png",
                    "price": 1000,
                    "status": "rejected",
                    "varietyDetail": {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "status": "active"
                    }
                },
                "serviceOrderDetail": {
                    "ServiceOrder": {},
                    "ServiceDetail": {}
                }
            },
            {
                "id": 2,
                "type": "revision",
                "date": "2019-10-30",
                "turn": "morning",
                "status": "booked",
                "calendarId": 2,
                "revision": {
                    "id": 6,
                    "description": "Mi Nevera, se congela y no enfria",
                    "imageRequestUrl": "public/images/avatar/avatardefault.png",
                    "price": 1000,
                    "status": "rejected",
                    "varietyDetail": {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "status": "active"
                    }
                },
                "serviceOrderDetail": {
                    "ServiceOrder": {},
                    "ServiceDetail": {}
                }
            },
            {
                "id": 3,
                "type": "revision",
                "date": "2019-10-20",
                "turn": "morning",
                "status": "booked",
                "calendarId": 3,
                "revision": {
                    "id": 7,
                    "description": "Mi Nevera, se congela y no enfria",
                    "imageRequestUrl": "public/images/avatar/avatardefault.png",
                    "price": 1000,
                    "status": "rejected",
                    "varietyDetail": {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "status": "active"
                    }
                },
                "serviceOrderDetail": {
                    "ServiceOrder": {},
                    "ServiceDetail": {}
                }
            },
            {
                "id": 4,
                "type": "revision",
                "date": "2019-10-25",
                "turn": "morning",
                "status": "booked",
                "calendarId": 4,
                "revision": {
                    "id": 9,
                    "description": "Mi Nevera, se congela y no enfria",
                    "imageRequestUrl": "public/images/avatar/avatardefault.png",
                    "price": 1000,
                    "status": "rejected",
                    "varietyDetail": {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "status": "active"
                    }
                },
                "serviceOrderDetail": {
                    "ServiceOrder": {},
                    "ServiceDetail": {}
                }
            },
            {
                "id": 5,
                "type": "revision",
                "date": "2019-10-24",
                "turn": "morning",
                "status": "booked",
                "calendarId": 5,
                "revision": {
                    "id": 11,
                    "description": "Mi Nevera, se congela y no enfria",
                    "imageRequestUrl": "public/images/avatar/avatardefault.png",
                    "price": 1000,
                    "status": "finalized",
                    "varietyDetail": {
                        "id": 3,
                        "name": " InstaView Door-in-Door",
                        "description": "31 cu.ft. - GM84SXDB",
                        "status": "active"
                    }
                },
                "serviceOrderDetail": {
                    "ServiceOrder": {},
                    "ServiceDetail": {}
                }
            }
        ]
    }
}
```
---

#### http://localhost:12225/api/calendar/lendersFree/:date/:turn (GET)

Get all Lenders that are avaliable on a specif date and turn.

**REQUEST**
Headers:  `x-access-token`
Path Variables: date = 2019-08-01, turn = morning

**RESPONSE**
```json
{
    {
    "status": true,
    "message": {
        "code": 200
    },
    "lenders": [
        {
            "id": 4,
            "firstName": "Maria",
            "lastName": "Perez",
            "email": "maria2@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 5,
            "firstName": "Maria",
            "lastName": "Lopez",
            "email": "maria3@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 6,
            "firstName": "Maria",
            "lastName": "Sanchez",
            "email": "maria4@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 7,
            "firstName": "Maria",
            "lastName": "Suarez",
            "email": "maria5@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 8,
            "firstName": "Maria",
            "lastName": "Cardiff",
            "email": "maria6@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 9,
            "firstName": "Maria",
            "lastName": "Melendez",
            "email": "maria7@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 10,
            "firstName": "Maria",
            "lastName": "Hernandez",
            "email": "maria8@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 11,
            "firstName": "Maria",
            "lastName": "Campos",
            "email": "maria9@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 12,
            "firstName": "Maria",
            "lastName": "Alvarez",
            "email": "maria10@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 13,
            "firstName": "Maria",
            "lastName": "Luces",
            "email": "maria11@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 14,
            "firstName": "Maria",
            "lastName": "Riera",
            "email": "maria12@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 15,
            "firstName": "Maria",
            "lastName": "Rea",
            "email": "maria13@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 16,
            "firstName": "Maria",
            "lastName": "Barreto",
            "email": "maria14@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 17,
            "firstName": "Maria",
            "lastName": "Amaro",
            "email": "maria15@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 18,
            "firstName": "Maria",
            "lastName": "Zeirbe",
            "email": "maria16@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        }
    ]
}
}

```
---



Add the Calendars of one Service Order Detail and the lender associated

**REQUEST**
Headers:  `x-access-token`
Path Variables: date = 2019-08-01, turn = morning

**RESPONSE**
```json
{
    {
    "status": true,
    "message": {
        "code": 200
    },
    "lenders": [
        {
            "id": 4,
            "firstName": "Maria",
            "lastName": "Perez",
            "email": "maria2@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 5,
            "firstName": "Maria",
            "lastName": "Lopez",
            "email": "maria3@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 6,
            "firstName": "Maria",
            "lastName": "Sanchez",
            "email": "maria4@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 7,
            "firstName": "Maria",
            "lastName": "Suarez",
            "email": "maria5@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 8,
            "firstName": "Maria",
            "lastName": "Cardiff",
            "email": "maria6@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 9,
            "firstName": "Maria",
            "lastName": "Melendez",
            "email": "maria7@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 10,
            "firstName": "Maria",
            "lastName": "Hernandez",
            "email": "maria8@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 11,
            "firstName": "Maria",
            "lastName": "Campos",
            "email": "maria9@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 12,
            "firstName": "Maria",
            "lastName": "Alvarez",
            "email": "maria10@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 13,
            "firstName": "Maria",
            "lastName": "Luces",
            "email": "maria11@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 14,
            "firstName": "Maria",
            "lastName": "Riera",
            "email": "maria12@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 15,
            "firstName": "Maria",
            "lastName": "Rea",
            "email": "maria13@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 16,
            "firstName": "Maria",
            "lastName": "Barreto",
            "email": "maria14@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 17,
            "firstName": "Maria",
            "lastName": "Amaro",
            "email": "maria15@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        },
        {
            "id": 18,
            "firstName": "Maria",
            "lastName": "Zeirbe",
            "email": "maria16@gmail.com",
            "role": 2,
            "status": "active",
            "skills": [
                {
                    "id": 1,
                    "name": "Pintor",
                    "description": "Sabe pintar paredes, techos y rodapies.",
                    "status": "active",
                    "experienceYears": 2
                }
            ]
        }
    ]
}
}

```
---

#### http://localhost:12225/api/calendar (POST)

Add the Calendars of one Service Order Detail and the lender associated

**REQUEST**
Headers:  `x-access-token`

```json
{
   "ServicerOrderId":"3",
   "calendars": [{
	   "type": "serviceOrderDetail",
        "ServiceOrderDetailId":"5",
        "date": "2019-10-28",
        "turn": "morning",
        "LenderId": "2"
    },
    {
	   "type": "serviceOrderDetail",
        "ServiceOrderDetailId":"5",
        "date": "2019-10-28",
        "turn": "afternoon",
        "LenderId": "2"
    }
    ]
}
```

**RESPONSE**
```json
{
    "calendar": {
        "id": 3,
        "code": "SIB1571360616403",
        "amount": 3000,
        "discount": null,
        "warrantyTime": 15,
        "reason": null,
        "imageClaimUrl": null,
        "status": "approved",
        "imagePaymentUrl": null,
        "createdAt": "2019-10-18T01:03:36.402Z",
        "updatedAt": "2019-10-18T01:15:02.308Z",
        "RevisionId": 11,
        "Revision": {
            "id": 11,
            "description": "Mi Nevera, se congela y no enfria",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "note": null,
            "imageRevisionUrl": null,
            "numberWorkers": null,
            "numberDays": null,
            "status": "finalized",
            "isForGuarantee": false,
            "createdAt": "2019-10-18T00:59:35.273Z",
            "updatedAt": "2019-10-18T01:03:36.365Z",
            "UserId": 1,
            "VarietyDetailId": 3,
            "LocationId": 1
        },
        "ServiceOrderDetails": [
            {
                "id": 5,
                "amount": 6000,
                "duration": 1,
                "status": "approved",
                "createdAt": "2019-10-18T01:03:36.414Z",
                "updatedAt": "2019-10-18T01:03:36.414Z",
                "ServiceDetailId": 2,
                "ServiceOrderId": 3,
                "ServiceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "estimatedPrice": 800,
                    "estimatedWarrantyTime": 7,
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "note": "Mantenimiento de motor de lavadora.",
                    "createdAt": "2019-10-17T23:49:44.596Z",
                    "updatedAt": "2019-10-17T23:49:44.596Z",
                    "ComponentId": 1
                },
                "Calendars": [
                    {
                        "date": "2019-10-28",
                        "id": 6,
                        "type": "serviceOrderDetail",
                        "turn": "morning",
                        "status": "booked",
                        "createdAt": "2019-10-18T01:58:09.069Z",
                        "updatedAt": "2019-10-18T01:58:09.069Z",
                        "ServiceOrderDetailId": 5,
                        "RevisionId": null,
                        "LenderCalendars": [
                            {
                                "id": 6,
                                "status": "booked",
                                "createdAt": "2019-10-18T01:58:09.146Z",
                                "updatedAt": "2019-10-18T01:58:09.146Z",
                                "CalendarId": 6,
                                "UserId": 2,
                                "User": {
                                    "id": 2,
                                    "firstName": "Maria",
                                    "lastName": "Moreno",
                                    "email": "maria@gmail.com",
                                    "dni": 2345678,
                                    "dniType": "v",
                                    "imageUrl": null,
                                    "dateOfBirth": "1994-12-24",
                                    "gender": "Femenino",
                                    "status": "active",
                                    "note": null,
                                    "createdAt": "2019-10-17T23:49:43.699Z",
                                    "updatedAt": "2019-10-17T23:49:43.699Z",
                                    "RoleId": 2
                                }
                            }
                        ]
                    },
                    {
                        "date": "2019-10-28",
                        "id": 7,
                        "type": "serviceOrderDetail",
                        "turn": "afternoon",
                        "status": "booked",
                        "createdAt": "2019-10-18T01:58:09.229Z",
                        "updatedAt": "2019-10-18T01:58:09.229Z",
                        "ServiceOrderDetailId": 5,
                        "RevisionId": null,
                        "LenderCalendars": [
                            {
                                "id": 7,
                                "status": "booked",
                                "createdAt": "2019-10-18T01:58:09.250Z",
                                "updatedAt": "2019-10-18T01:58:09.250Z",
                                "CalendarId": 7,
                                "UserId": 2,
                                "User": {
                                    "id": 2,
                                    "firstName": "Maria",
                                    "lastName": "Moreno",
                                    "email": "maria@gmail.com",
                                    "dni": 2345678,
                                    "dniType": "v",
                                    "imageUrl": null,
                                    "dateOfBirth": "1994-12-24",
                                    "gender": "Femenino",
                                    "status": "active",
                                    "note": null,
                                    "createdAt": "2019-10-17T23:49:43.699Z",
                                    "updatedAt": "2019-10-17T23:49:43.699Z",
                                    "RoleId": 2
                                }
                            }
                        ]
                    },
                    {
                        "date": "2019-10-29",
                        "id": 8,
                        "type": "serviceOrderDetail",
                        "turn": "morning",
                        "status": "booked",
                        "createdAt": "2019-10-18T01:58:09.273Z",
                        "updatedAt": "2019-10-18T01:58:09.273Z",
                        "ServiceOrderDetailId": 5,
                        "RevisionId": null,
                        "LenderCalendars": [
                            {
                                "id": 8,
                                "status": "booked",
                                "createdAt": "2019-10-18T01:58:09.289Z",
                                "updatedAt": "2019-10-18T01:58:09.289Z",
                                "CalendarId": 8,
                                "UserId": 2,
                                "User": {
                                    "id": 2,
                                    "firstName": "Maria",
                                    "lastName": "Moreno",
                                    "email": "maria@gmail.com",
                                    "dni": 2345678,
                                    "dniType": "v",
                                    "imageUrl": null,
                                    "dateOfBirth": "1994-12-24",
                                    "gender": "Femenino",
                                    "status": "active",
                                    "note": null,
                                    "createdAt": "2019-10-17T23:49:43.699Z",
                                    "updatedAt": "2019-10-17T23:49:43.699Z",
                                    "RoleId": 2
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "Bitacoras": [
            {
                "id": 23,
                "type": "serviceOrder",
                "eventType": "budget",
                "description": null,
                "date": "2019-10-17T00:00:00.000Z",
                "status": "ready",
                "createdAt": "2019-10-18T01:03:36.492Z",
                "updatedAt": "2019-10-18T01:03:36.492Z",
                "MotiveId": 1,
                "RevisionId": null,
                "ServiceOrderId": 3,
                "Motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive",
                    "status": "active",
                    "createdAt": "2019-10-17T23:49:44.871Z",
                    "updatedAt": "2019-10-17T23:49:44.871Z"
                }
            },
            {
                "id": 24,
                "type": "serviceOrder",
                "eventType": "budgetEvaluation",
                "description": null,
                "date": "2019-10-16T00:00:00.000Z",
                "status": "ready",
                "createdAt": "2019-10-18T01:03:36.585Z",
                "updatedAt": "2019-10-18T01:15:02.162Z",
                "MotiveId": 1,
                "RevisionId": null,
                "ServiceOrderId": 3,
                "Motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive",
                    "status": "active",
                    "createdAt": "2019-10-17T23:49:44.871Z",
                    "updatedAt": "2019-10-17T23:49:44.871Z"
                }
            },
            {
                "id": 25,
                "type": "serviceOrder",
                "eventType": "schedule",
                "description": null,
                "date": "2019-10-16T00:00:00.000Z",
                "status": "ready",
                "createdAt": "2019-10-18T01:15:02.231Z",
                "updatedAt": "2019-10-18T01:58:09.322Z",
                "MotiveId": 1,
                "RevisionId": null,
                "ServiceOrderId": 3,
                "Motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive",
                    "status": "active",
                    "createdAt": "2019-10-17T23:49:44.871Z",
                    "updatedAt": "2019-10-17T23:49:44.871Z"
                }
            },
            {
                "id": 26,
                "type": "serviceOrder",
                "eventType": "execution",
                "description": null,
                "date": "2019-10-17T00:00:00.000Z",
                "status": "pending",
                "createdAt": "2019-10-18T01:58:09.348Z",
                "updatedAt": "2019-10-18T01:58:09.348Z",
                "MotiveId": 1,
                "RevisionId": null,
                "ServiceOrderId": 3,
                "Motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive",
                    "status": "active",
                    "createdAt": "2019-10-17T23:49:44.871Z",
                    "updatedAt": "2019-10-17T23:49:44.871Z"
                }
            }
        ]
    }
}

```
---

#### http://localhost:12225/api/calendar/:id/execute (PUT)

Execute one Service Order Booked.

**REQUEST**
Headers:  `x-access-token`

```json
{
   "ServicerOrderId":"3",
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Ejecucion Detalle Orden de Servicio creado exitosamente."
    },
    "serviceOrder": {
        "id": 3,
        "code": "SIB1571369115947",
        "amount": 3000,
        "warrantyTime": 15,
        "createdAt": 1571369115945,
        "updatedAt": 1571369182181,
        "status": "approved",
        "revision": {
            "id": 5,
            "description": "Mi lavadora esta descompuesta, no lava",
            "imageRequestUrl": "public/images/avatar/avatardefault.png",
            "price": 1000,
            "createdAt": 1571368911755,
            "status": "finalized"
        },
        "serviceOrderDetails": [
            {
                "id": 5,
                "ServiceDetailId": 2,
                "ServiceOrderId": 3,
                "duration": 1,
                "createdAt": 1571369115959,
                "updatedAt": 1571369115959,
                "status": "approved",
                "ServiceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "estimatedPrice": 800,
                    "estimatedWarrantyTime": 7,
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "note": "Mantenimiento de motor de lavadora.",
                    "ComponentId": 1
                },
                "calendars": [
                    {
                        "id": 3,
                        "type": "serviceOrderDetail",
                        "date": "2019-10-28",
                        "turn": "afternoon",
                        "status": "booked",
                        "lenders": [
                            {
                                "id": 2,
                                "firstName": "Maria",
                                "lastName": "Moreno",
                                "email": "maria@gmail.com",
                                "role": 2,
                                "status": "active"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "type": "serviceOrderDetail",
                        "date": "2019-10-28",
                        "turn": "morning",
                        "status": "executed",
                        "lenders": [
                            {
                                "id": 2,
                                "firstName": "Maria",
                                "lastName": "Moreno",
                                "email": "maria@gmail.com",
                                "role": 2,
                                "status": "active"
                            }
                        ]
                    }
                ]
            }
        ],
        "bitacoras": [
            {
                "id": 5,
                "type": "serviceOrder",
                "eventType": "budget",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 6,
                "type": "serviceOrder",
                "eventType": "budgetEvaluation",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 7,
                "type": "serviceOrder",
                "eventType": "schedule",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 8,
                "type": "serviceOrder",
                "eventType": "execution",
                "status": "ready",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            },
            {
                "id": 10,
                "type": "serviceOrder",
                "eventType": "warranty",
                "status": "pending",
                "ServiceOrderId": 3,
                "motive": {
                    "id": 1,
                    "name": "Generic",
                    "description": "No motive"
                }
            }
        ]
    }
}

```
---


#### http://localhost:12225/api/calendar/:id/recreate (PUT)

Recreate one calendar cancel of a Revision or Service Order.

**REQUEST**
Headers:  `x-access-token`

```json
{
   "RevisionOrServicerOrderId":"19",
   "calendars": [{
	   "type": "revision",
        "date": "2019-10-25",
        "turn": "morning",
        "LenderId": "2"
    }]
}
```
```json

{
   "RevisionOrServicerOrderId":"6",
   "calendars": [{
	   "type": "serviceOrderDetail",
        "ServiceOrderDetailId":"8",
        "date": "2019-10-28",
        "turn": "morning",
        "LenderId": "2"
    }]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Calendario Re creado exitosamente."
    }
}
```
---


#### http://localhost:12225/api/calendar/:id (DELETE)


Cancel one calendar of one lender associated. Must have status booked. Of a Revision or a ServiceOrder

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Calendario eliminado exitosamente."
    }
}
```
---





Cancel one calendar of one lender associated.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Calendario eliminado exitosamente."
    }
}
```

---


### Motive

#### http://localhost:12225/api/motive (GET)

Get all Motives.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "motives": [
        {
            "id": 1,
            "name": "Generic",
            "description": "No motive",
            "status": "active"
        },
        {
            "id": 2,
            "name": "Irreparable",
            "description": "Totalmente Dañado",
            "status": "active"
        },
        {
            "id": 3,
            "name": "Direccion Lejana",
            "description": "Imposible el traslado ",
            "status": "active"
        },
        {
            "id": 4,
            "name": "Presupuesto Alto",
            "description": "Muy alto el presupuesto",
            "status": "active"
        },
        {
            "id": 5,
            "name": "Fuera de Garantia",
            "description": "Fuera de Garantia",
            "status": "active"
        },
        {
            "id": 6,
            "name": "Incumplimiento de Politicas ",
            "description": "No cumple con las politicas de Garantia",
            "status": "active"
        }
    ]
}
```
---

#### http://localhost:12225/api/motive/:id (GET)

Get one motive.

**REQUEST**
Headers:  `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "motive": {
        "id": 1,
        "name": "Generic",
        "description": "No motive",
        "status": "active"
    }
}
```
---

#### http://localhost:12225/api/motive (POST)

Add one Motive, of Rejection or Incidence

**REQUEST**
Headers:  `x-access-token`
```json
{
    "name": "Motive Test Name",
    "description": "Description of the Motive Test Name"
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Motivo creado exitosamente."
    },
    "motive": {
        "id": 7,
        "name": "Motive Test Name",
        "description": "Description of the Motive Test Name",
        "status": "active"
    }
}
```
---

#### http://localhost:12225/api/motive/:id (PUT)

Update one Motive.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 7
``` json
{
	"name": "Motive Test Name Updated",
	"description": "Description Motive Test Name Updated "
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Motivo modificado exitosamente."
    },
    "motive": {
        "id": 7,
        "name": "Motive Test Name Updated",
        "description": "ription Motive Test Name Updated ",
        "status": "active"
    }
}
```
---

#### http://localhost:12225/api/motive/:id (DELETE)

Delete one Motive.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 7

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Motivo eliminado exitosamente."
    }
}
```

---


### Qualification

#### http://localhost:12225/api/qualification (POST)

Create a Qualification, can be a user or a service detail.

* Note: The Service Order state should be `finalized` or `warranty`

**REQUEST**
Headers: `x-access-token`
```json
{
	"AuthorId": 1,
	"ServiceDetailId": 2,
	"ServiceOrderDetailId": 1
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Calificación creado exitosamente."
    },
    "qualification": {
        "id": 1,
        "createdAt": 1572577258296,
        "updatedAt": 1572577258296,
        "typeQualification": "serviceDetail",
        "status": "active",
        "author": {
            "id": 1,
            "firstName": "Gilberto",
            "lastName": "Perez",
            "email": "gilberto@gmail.com",
            "status": "active"
        },
        "user": {},
        "serviceDetail": {
            "id": 2,
            "name": "Mantenimiento de motor",
            "serviceType": "Mantenimiento",
            "status": "active",
            "component": {
                "id": 1,
                "name": "Motor",
                "description": "Motor de Lavadora.",
                "status": "active"
            }
        },
        "serviceOrderDetail": {
            "id": 1,
            "serviceDetail": {
                "id": 2,
                "name": "Mantenimiento de motor",
                "serviceType": "Mantenimiento",
                "status": "active",
                "component": {
                    "id": 1,
                    "name": "Motor",
                    "description": "Motor de Lavadora.",
                    "status": "active"
                }
            },
            "serviceOrder": {
                "id": 1,
                "code": "SIB15725765981551",
                "revision": {
                    "id": 1,
                    "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta"
                }
            },
            "duration": 8,
            "createdAt": 1572576598231,
            "updatedAt": 1572576598231,
            "status": "approved"
        }
    }
}
```

---




#### http://localhost:12225/api/qualification/:id (PUT)

Update a Qualification.


**REQUEST**
Headers:  `x-access-token`
```json
{
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Calificación modificado exitosamente."
    },
    "qualification": {
        "id": 1,
        "createdAt": 1572577258296,
        "updatedAt": 1572579234452,
        "typeQualification": "serviceDetail",
        "status": "active",
        "author": {
            "id": 1,
            "firstName": "Gilberto",
            "lastName": "Perez",
            "email": "gilberto@gmail.com",
            "status": "active"
        },
        "user": {},
        "serviceDetail": {
            "id": 2,
            "name": "Mantenimiento de motor",
            "serviceType": "Mantenimiento",
            "status": "active",
            "component": {
                "id": 1,
                "name": "Motor",
                "description": "Motor de Lavadora.",
                "status": "active"
            }
        },
        "serviceOrderDetail": {
            "id": 1,
            "serviceDetail": {
                "id": 2,
                "name": "Mantenimiento de motor",
                "serviceType": "Mantenimiento",
                "status": "active",
                "component": {
                    "id": 1,
                    "name": "Motor",
                    "description": "Motor de Lavadora.",
                    "status": "active"
                }
            },
            "serviceOrder": {
                "id": 1,
                "code": "SIB15725765981551",
                "revision": {
                    "id": 1,
                    "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta"
                }
            },
            "duration": 8,
            "createdAt": 1572576598231,
            "updatedAt": 1572576598231,
            "status": "approved"
        }
    }
}
```

---


#### http://localhost:12225/api/qualification/:id (GET)

Get a Qualification.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "qualification": {
        "id": 1,
        "createdAt": 1572577258296,
        "updatedAt": 1572579234452,
        "typeQualification": "serviceDetail",
        "status": "active",
        "author": {
            "id": 1,
            "firstName": "Gilberto",
            "lastName": "Perez",
            "email": "gilberto@gmail.com",
            "status": "active"
        },
        "user": {},
        "serviceDetail": {
            "id": 2,
            "name": "Mantenimiento de motor",
            "serviceType": "Mantenimiento",
            "status": "active",
            "component": {
                "id": 1,
                "name": "Motor",
                "description": "Motor de Lavadora.",
                "status": "active"
            }
        },
        "serviceOrderDetail": {
            "id": 1,
            "serviceDetail": {
                "id": 2,
                "name": "Mantenimiento de motor",
                "serviceType": "Mantenimiento",
                "status": "active",
                "component": {
                    "id": 1,
                    "name": "Motor",
                    "description": "Motor de Lavadora.",
                    "status": "active"
                }
            },
            "serviceOrder": {
                "id": 1,
                "code": "SIB15725765981551",
                "revision": {
                    "id": 1,
                    "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta"
                }
            },
            "duration": 8,
            "createdAt": 1572576598231,
            "updatedAt": 1572576598231,
            "status": "approved"
        }
    }
}
```

---


#### http://localhost:12225/api/qualification/user/:userId (GET)

Get all Qualifications by User.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "qualifications": [
        {
            "id": 3,
            "createdAt": 1572577956451,
            "updatedAt": 1572577956451,
            "typeQualification": "user",
            "status": "active",
            "author": {
                "id": 1,
                "firstName": "Gilberto",
                "lastName": "Perez",
                "email": "gilberto@gmail.com",
                "status": "active"
            },
            "user": {
                "id": 1,
                "firstName": "Gilberto",
                "lastName": "Perez",
                "email": "gilberto@gmail.com",
                "status": "active"
            },
            "serviceDetail": {
                "component": {}
            },
            "serviceOrderDetail": {
                "id": 1,
                "serviceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "component": {
                        "id": 1,
                        "name": "Motor",
                        "description": "Motor de Lavadora.",
                        "status": "active"
                    }
                },
                "serviceOrder": {
                    "id": 1,
                    "code": "SIB15725765981551",
                    "revision": {
                        "id": 1,
                        "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta"
                    }
                },
                "duration": 8,
                "createdAt": 1572576598231,
                "updatedAt": 1572576598231,
                "status": "approved"
            }
        }
    ]
}
```

---


#### http://localhost:12225/api/qualification/serviceDetail/:serviceDetailId (GET)

Get all Qualifications by Service Detail.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "qualifications": [
        {
            "id": 1,
            "createdAt": 1572577258296,
            "updatedAt": 1572579234452,
            "typeQualification": "serviceDetail",
            "status": "active",
            "author": {
                "id": 1,
                "firstName": "Gilberto",
                "lastName": "Perez",
                "email": "gilberto@gmail.com",
                "status": "active"
            },
            "user": {},
            "serviceDetail": {
                "id": 2,
                "name": "Mantenimiento de motor",
                "serviceType": "Mantenimiento",
                "status": "active",
                "component": {
                    "id": 1,
                    "name": "Motor",
                    "description": "Motor de Lavadora.",
                    "status": "active"
                }
            },
            "serviceOrderDetail": {
                "id": 1,
                "serviceDetail": {
                    "id": 2,
                    "name": "Mantenimiento de motor",
                    "serviceType": "Mantenimiento",
                    "status": "active",
                    "component": {
                        "id": 1,
                        "name": "Motor",
                        "description": "Motor de Lavadora.",
                        "status": "active"
                    }
                },
                "serviceOrder": {
                    "id": 1,
                    "code": "SIB15725765981551",
                    "revision": {
                        "id": 1,
                        "description": "Estoy presentado problemas con mi lavadora no quiere funcionar de forma correcta"
                    }
                },
                "duration": 8,
                "createdAt": 1572576598231,
                "updatedAt": 1572576598231,
                "status": "approved"
            }
        }
    ]
}
```

---

#### http://localhost:12225/api/qualification/:id (DELETE)

Delete a Qualification.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Calificación eliminado exitosamente."
    }
}
```

---



### Group

#### http://localhost:12225/api/group (GET)

Get all Groups.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "groups": [
        {
            "id": 1,
            "name": "Personal",
            "description": "Tiene hijos, Vive Solo, ...",
            "status": "active",
            "parameters": [
                {
                    "id": 1,
                    "name": "Tiene Hijos",
                    "description": "Padres",
                    "status": "active"
                },
                {
                    "id": 2,
                    "name": "Vive Solo",
                    "description": "Vive solo?",
                    "status": "active"
                }
            ]
        },
        {
            "id": 2,
            "name": "Profesional",
            "description": "Carreras u ocupaciones, Medico, Ingeniero, Educador, Comerciante, Ama de Casa..",
            "status": "active",
            "parameters": [
                {
                    "id": 3,
                    "name": "Educador",
                    "description": "Profesion es educador",
                    "status": "active"
                },
                {
                    "id": 4,
                    "name": "Ama de casa",
                    "description": "Ocupacion es ama de casa ",
                    "status": "active"
                }
            ]
        },
        {
            "id": 3,
            "name": "Hobbies",
            "description": "Bricolaje, Pintura, .... ",
            "status": "active",
            "parameters": [
                {
                    "id": 5,
                    "name": "Bricolaje",
                    "description": "Maderas. ",
                    "status": "active"
                },
                {
                    "id": 6,
                    "name": "Pintura",
                    "description": "Pintar",
                    "status": "active"
                }
            ]
        }
    ]
}

```

---

#### http://localhost:12225/api/group/:id (GET)

Get one Group.

**REQUEST**
Headers:  `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "groups": [
        {
            "id": 1,
            "name": "Personal",
            "description": "Tiene hijos, Vive Solo, ...",
            "status": "active",
            "parameters": [
                {
                    "id": 1,
                    "name": "Tiene Hijos",
                    "description": "Padres",
                    "status": "active"
                },
                {
                    "id": 2,
                    "name": "Vive Solo",
                    "description": "Vive solo?",
                    "status": "active"
                }
            ]
        },
        {
            "id": 2,
            "name": "Profesional",
            "description": "Carreras u ocupaciones, Medico, Ingeniero, Educador, Comerciante, Ama de Casa..",
            "status": "active",
            "parameters": [
                {
                    "id": 3,
                    "name": "Educador",
                    "description": "Profesion es educador",
                    "status": "active"
                },
                {
                    "id": 4,
                    "name": "Ama de casa",
                    "description": "Ocupacion es ama de casa ",
                    "status": "active"
                }
            ]
        },
        {
            "id": 3,
            "name": "Hobbies",
            "description": "Bricolaje, Pintura, .... ",
            "status": "active",
            "parameters": [
                {
                    "id": 5,
                    "name": "Bricolaje",
                    "description": "Maderas. ",
                    "status": "active"
                },
                {
                    "id": 6,
                    "name": "Pintura",
                    "description": "Pintar",
                    "status": "active"
                }
            ]
        }
    ]
}

```

---

#### http://localhost:12225/api/group (POST)

Add one Group, for parameter classification.

**REQUEST**
Headers:  `x-access-token`
```json
{
    "name": "Group Test Name",
    "description": "Description of the Group Test Name"
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Grupo creado exitosamente."
    },
    "group": {
        "id": 4,
        "name": "Group Test Name",
        "description": "Description of the Group Test Name ",
        "status": "active",
        "parameters": []
    }
}

```
---

#### http://localhost:12225/api/group/:id (PUT)

Update one Group.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 4
``` json
{
	"name": "Group Test Name Updated",
	"description": "Description Group Test Name Updated"
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Grupo modificado exitosamente."
    },
    "group": {
        "id": 4,
        "name": "Group Test Name Updated",
        "description": "Description Group Test Name Updated",
        "status": "active",
        "parameters": []
    }
}

```

---

#### http://localhost:12225/api/group/:id (DELETE)

Delete one Group.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 4

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Grupo eliminado exitosamente."
    }
}

```

---



### Parameter

#### http://localhost:12225/api/parameter (GET)

Get all parameters.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "parameters": [
        {
            "id": 1,
            "name": "Tiene Hijos",
            "description": "Padres",
            "status": "active",
            "group": {
                "id": 1,
                "name": "Personal",
                "description": "Tiene hijos, Vive Solo, ...",
                "status": "active"
            },
            "users": [
                {
                    "id": 1,
                    "firstName": "Gilberto",
                    "lastName": "Perez",
                    "gender": "Masculino",
                    "status": "active"
                },
                {
                    "id": 2,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "gender": "Femenino",
                    "status": "active"
                }
            ],
            "promotions": [
                {
                    "id": 1,
                    "name": "Diciembre a Cocinar",
                    "description": "Descuento en Reparacion y Mantienimiento de Cocinas",
                    "type": "target",
                    "percentDiscount": 0.1,
                    "dateStart": 1575158400000,
                    "dateEnd": 1577750400000,
                    "status": "active"
                },
                {
                    "id": 3,
                    "name": "Frescura a tu altura",
                    "description": "Descuento en repacion y Mantenimiento de Aires Acondicionados",
                    "type": "target",
                    "percentDiscount": 0.1,
                    "dateStart": 1575158400000,
                    "dateEnd": 1577750400000,
                    "status": "active"
                }
            ]
        },
        {
            "id": 2,
            "name": "Vive Solo",
            "description": "Vive solo?",
            "status": "active",
            "group": {
                "id": 1,
                "name": "Personal",
                "description": "Tiene hijos, Vive Solo, ...",
                "status": "active"
            },
            "users": [
                {
                    "id": 3,
                    "firstName": "Maria",
                    "lastName": "Moreno",
                    "gender": "Femenino",
                    "status": "active"
                }
            ],
            "promotions": [
                {
                    "id": 3,
                    "name": "Frescura a tu altura",
                    "description": "Descuento en repacion y Mantenimiento de Aires Acondicionados",
                    "type": "target",
                    "percentDiscount": 0.1,
                    "dateStart": 1575158400000,
                    "dateEnd": 1577750400000,
                    "status": "active"
                }
            ]
        },
        {
            "id": 3,
            "name": "Educador",
            "description": "Profesion es educador",
            "status": "active",
            "group": {
                "id": 2,
                "name": "Profesional",
                "description": "Carreras u ocupaciones, Medico, Ingeniero, Educador, Comerciante, Ama de Casa..",
                "status": "active"
            },
            "users": [
                {
                    "id": 4,
                    "firstName": "Gilberto",
                    "lastName": "Perez",
                    "gender": "Masculino",
                    "status": "active"
                }
            ],
            "promotions": []
        },
        {
            "id": 4,
            "name": "Ama de casa",
            "description": "Ocupacion es ama de casa ",
            "status": "active",
            "group": {
                "id": 2,
                "name": "Profesional",
                "description": "Carreras u ocupaciones, Medico, Ingeniero, Educador, Comerciante, Ama de Casa..",
                "status": "active"
            },
            "users": [],
            "promotions": [
                {
                    "id": 1,
                    "name": "Diciembre a Cocinar",
                    "description": "Descuento en Reparacion y Mantienimiento de Cocinas",
                    "type": "target",
                    "percentDiscount": 0.1,
                    "dateStart": 1575158400000,
                    "dateEnd": 1577750400000,
                    "status": "active"
                }
            ]
        },
        {
            "id": 5,
            "name": "Bricolaje",
            "description": "Maderas. ",
            "status": "active",
            "group": {
                "id": 3,
                "name": "Hobbies",
                "description": "Bricolaje, Pintura, .... ",
                "status": "active"
            },
            "users": [],
            "promotions": [
                {
                    "id": 2,
                    "name": "Casita Bonita",
                    "description": "Descuento en repacion y Mantenimiento de Paredes",
                    "type": "target",
                    "percentDiscount": 0.1,
                    "dateStart": 1575158400000,
                    "dateEnd": 1577750400000,
                    "status": "active"
                }
            ]
        },
        {
            "id": 6,
            "name": "Pintura",
            "description": "Pintar",
            "status": "active",
            "group": {
                "id": 3,
                "name": "Hobbies",
                "description": "Bricolaje, Pintura, .... ",
                "status": "active"
            },
            "users": [],
            "promotions": [
                {
                    "id": 4,
                    "name": "A pintar se ha dicho",
                    "description": "Descuento en pintura de interiores",
                    "type": "target",
                    "percentDiscount": 0.1,
                    "dateStart": 1575158400000,
                    "dateEnd": 1577750400000,
                    "status": "active"
                }
            ]
        }
    ]
}

```

---

#### http://localhost:12225/api/parameter/:id (GET)

Get one parameter.

**REQUEST**
Headers:  `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "parameter": {
        "id": 1,
        "name": "Tiene Hijos",
        "description": "Padres",
        "status": "active",
        "group": {
            "id": 1,
            "name": "Personal",
            "description": "Tiene hijos, Vive Solo, ...",
            "status": "active"
        },
        "users": [
            {
                "id": 1,
                "firstName": "Gilberto",
                "lastName": "Perez",
                "gender": "Masculino",
                "status": "active"
            },
            {
                "id": 2,
                "firstName": "Maria",
                "lastName": "Moreno",
                "gender": "Femenino",
                "status": "active"
            }
        ],
        "promotions": [
            {
                "id": 1,
                "name": "Diciembre a Cocinar",
                "description": "Descuento en Reparacion y Mantienimiento de Cocinas",
                "type": "target",
                "percentDiscount": 0.1,
                "dateStart": 1575158400000,
                "dateEnd": 1577750400000,
                "status": "active"
            },
            {
                "id": 3,
                "name": "Frescura a tu altura",
                "description": "Descuento en repacion y Mantenimiento de Aires Acondicionados",
                "type": "target",
                "percentDiscount": 0.1,
                "dateStart": 1575158400000,
                "dateEnd": 1577750400000,
                "status": "active"
            }
        ]
    }
}

```

---

#### http://localhost:12225/api/parameter (POST)

Add one parameter.

**REQUEST**
Headers:  `x-access-token`
```json
{
    "name": "Tiene Automóvil",
    "description": "Dueño de Automóvil ",
    "GroupId": 1
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Parametro creado exitosamente."
    },
    "parameter": {
        "id": 7,
        "name": "Tiene Automóvil",
        "description": "Es dueño de un Automóvil",
        "status": "active",
        "group": {
            "id": 1,
            "name": "Personal",
            "description": "Tiene hijos, Vive Solo, ...",
            "status": "active"
        },
        "users": [],
        "promotions": []
    }
}

```
---

#### http://localhost:12225/api/parameter/:id (PUT)

Update one parameter.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 4
``` json
{
	"name": "Dueño de Automóvil"
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Parametro modificado exitosamente."
    },
    "parameter": {
        "id": 7,
        "name": "Dueño de Automvil",
        "description": "Es dueño de un Automóvil",
        "status": "active",
        "group": {
            "id": 1,
            "name": "Personal",
            "description": "Tiene hijos, Vive Solo, ...",
            "status": "active"
        },
        "users": [],
        "promotions": []
    }
}

```

---

#### http://localhost:12225/api/parameter/:id (DELETE)

Delete one parameter.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 7

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Parametro eliminado exitosamente."
    }
}

```

---

### Promotion

#### http://localhost:12225/api/promotion (GET)

Get all Promotions.

**REQUEST**
Headers: `x-access-token`

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "promotions": [
        {
            "id": 1,
            "name": "Diciembre a Cocinar",
            "description": "Descuento en Reparacion y Mantienimiento de Cocinas",
            "type": "target",
            "percentDiscount": 0.1,
            "dateStart": 1575158400000,
            "dateEnd": 1577750400000,
            "status": "active",
            "equipinfras": {
                "id": 4,
                "name": "Televisor ",
                "type": "E",
                "imageUrl": "http://someDirection",
                "description": "Televisores",
                "status": "active"
            },
            "subcategory": {},
            "parameters": [
                {
                    "id": 1,
                    "name": "Tiene Hijos",
                    "description": "Padres",
                    "status": "active"
                },
                {
                    "id": 4,
                    "name": "Ama de casa",
                    "description": "Ocupacion es ama de casa ",
                    "status": "active"
                }
            ]
        },
        {
            "id": 2,
            "name": "Casita Bonita",
            "description": "Descuento en repacion y Mantenimiento de Paredes",
            "type": "target",
            "percentDiscount": 0.1,
            "dateStart": 1575158400000,
            "dateEnd": 1577750400000,
            "status": "active",
            "equipinfras": {
                "id": 12,
                "name": "Techo ",
                "type": "I",
                "imageUrl": "http://someDirection",
                "description": "Techos de ...",
                "status": "active"
            },
            "subcategory": {},
            "parameters": [
                {
                    "id": 5,
                    "name": "Bricolaje",
                    "description": "Maderas. ",
                    "status": "active"
                }
            ]
        },
        {
            "id": 3,
            "name": "Frescura a tu altura",
            "description": "Descuento en repacion y Mantenimiento de Aires Acondicionados",
            "type": "target",
            "percentDiscount": 0.1,
            "dateStart": 1575158400000,
            "dateEnd": 1577750400000,
            "status": "active",
            "equipinfras": {
                "id": 3,
                "name": "Aire Acondicionado",
                "type": "E",
                "imageUrl": "http://someDirection",
                "description": "Aires Acondicionados",
                "status": "active"
            },
            "subcategory": {},
            "parameters": [
                {
                    "id": 1,
                    "name": "Tiene Hijos",
                    "description": "Padres",
                    "status": "active"
                },
                {
                    "id": 2,
                    "name": "Vive Solo",
                    "description": "Vive solo?",
                    "status": "active"
                }
            ]
        },
        {
            "id": 4,
            "name": "A pintar se ha dicho",
            "description": "Descuento en pintura de interiores",
            "type": "target",
            "percentDiscount": 0.1,
            "dateStart": 1575158400000,
            "dateEnd": 1577750400000,
            "status": "active",
            "equipinfras": {
                "id": 7,
                "name": "Gotele Exteriores ",
                "type": "I",
                "imageUrl": "http://someDirection",
                "description": "Metodo de pintado \"Gotele\" en Exteriores",
                "status": "active"
            },
            "subcategory": {},
            "parameters": [
                {
                    "id": 6,
                    "name": "Pintura",
                    "description": "Pintar",
                    "status": "active"
                }
            ]
        },
        {
            "id": 5,
            "name": "Mejora tu linea BLanca",
            "description": "Descuento en Reparacion y Mantienimiento en Linea Blanca",
            "type": "generic",
            "percentDiscount": 0.15,
            "dateStart": 1575158400000,
            "dateEnd": 1577750400000,
            "status": "active",
            "equipinfras": {},
            "subcategory": {
                "id": 1,
                "name": "Linea Blanca",
                "description": "Neveras, Microondas,Aires Aconcicionados...",
                "status": "active"
            },
            "parameters": []
        },
        {
            "id": 6,
            "name": "Reconstruye a lo grande",
            "description": "Descuento en Construcciones Macros",
            "type": "generic",
            "percentDiscount": 0.1,
            "dateStart": 1575158400000,
            "dateEnd": 1577750400000,
            "status": "active",
            "equipinfras": {},
            "subcategory": {
                "id": 8,
                "name": "Macro",
                "description": "Paredes, Techos, Pisos...",
                "status": "active"
            },
            "parameters": []
        }
    ]
}

```

---

#### http://localhost:12225/api/promotion/:id (GET)

Get one Promotion.

**REQUEST**
Headers:  `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "promotions": {
        "id": 1,
        "name": "Diciembre a Cocinar",
        "description": "Descuento en Reparacion y Mantienimiento de Cocinas",
        "type": "target",
        "percentDiscount": 0.1,
        "dateStart": 1575158400000,
        "dateEnd": 1577750400000,
        "status": "active",
        "equipinfras": {
            "id": 4,
            "name": "Televisor ",
            "type": "E",
            "imageUrl": "http://someDirection",
            "description": "Televisores",
            "status": "active"
        },
        "subcategory": {},
        "parameters": [
            {
                "id": 1,
                "name": "Tiene Hijos",
                "description": "Padres",
                "status": "active"
            },
            {
                "id": 4,
                "name": "Ama de casa",
                "description": "Ocupacion es ama de casa ",
                "status": "active"
            }
        ]
    }
}

```

---

#### http://localhost:12225/api/promotion (POST)

Add one Promotion.

* Note: type allowed : `'generic', 'target'`. The `'generic'` : Generic promotions directed to a Subcategory. The `'target'`: for specific promotions directed to a Equipment or Infraestructure.

**REQUEST**
Headers:  `x-access-token`
```json
{
    "name": "Tu mejor promocion Especifica",
    "description": "Descuentos en algo que desees",
    "type": "target",
    "EquipinfraId": 3,
    "percentDiscount": 0.1,
    "dateStart": "2019-12-01",
    "dateEnd": "2019-12-31",
}
```

```json
{
    "name": "Tu mejor promocion generica",
    "description": "Descuentos en algo que desees",
    "type": "generic",
    "SubcategoryId": 1,
    "percentDiscount": 0.1,
    "dateStart": "2019-12-01",
    "dateEnd": "2019-12-31",
}
```
**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Promocion creado exitosamente."
    },
    "promotions": {
        "id": 8,
        "name": "Tu mejor promocion Especifica",
        "description": "Descuentos en algo que desees ",
        "type": "target",
        "percentDiscount": 0.3,
        "dateStart": "2019-12-01",
        "dateEnd": "2019-12-31",
        "status": "active",
        "equipinfras": {
            "id": 2,
            "name": "Nevera",
            "type": "E",
            "imageUrl": "http://someDirection",
            "description": "neveras",
            "status": "active"
        },
        "subcategory": {},
        "parameters": []
    }
}
```

```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Promocion creado exitosamente."
    },
    "promotions": {
        "id": 10,
        "name": "Tu mejor promocion generica",
        "description": "Descuentos en algo que desees ",
        "type": "generic",
        "percentDiscount": 0.3,
        "dateStart": "2019-12-01",
        "dateEnd": "2019-12-31",
        "status": "active",
        "equipinfras": {},
        "subcategory": {
            "id": 1,
            "name": "Linea Blanca",
            "description": "Neveras, Microondas,Aires Aconcicionados...",
            "status": "active"
        },
        "parameters": []
    }
}
```

---


#### http://localhost:12225/api/promotion/:id (PUT)

Update one Promotion.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 10
``` json
{
	"name": "Promocion GENERICA"
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Promocion modificado exitosamente."
    },
    "promotions": {
        "id": 10,
        "name": "Promocion GENERICA",
        "description": "Descuentos en algo que desees ",
        "type": "generic",
        "percentDiscount": 0.3,
        "dateStart": "2019-12-01",
        "dateEnd": "2019-12-31",
        "status": "active",
        "equipinfras": {},
        "subcategory": {
            "id": 1,
            "name": "Linea Blanca",
            "description": "Neveras, Microondas,Aires Aconcicionados...",
            "status": "active"
        },
        "parameters": []
    }
}
```

---

#### http://localhost:12225/api/Promotion/:id (DELETE)

Delete one Promotion.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 10

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Promocion eliminada exitosamente."
    }
}

```
---

#### http://localhost/:12225/api/promotion/:id/parameter (PUT)

Set the parameter to the Promotion. All parameters associated must be passed in the array or the will be unassociated.

* Note: The promotion must be of type:'target'.

**REQUEST**
Headers: `x-access-token`
Path Variables: id = 4
```json
{
	"parameters": [1,2,3]
}
```

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200,
        "text": "Promocion modificada exitosamente."
    },
    "promotions": {
        "id": 4,
        "name": "A pintar se ha dicho",
        "description": "Descuento en pintura de interiores",
        "type": "target",
        "percentDiscount": 0.1,
        "dateStart": "2019-12-01",
        "dateEnd": "2019-12-31",
        "status": "active",
        "equipinfras": {
            "id": 7,
            "name": "Gotele Exteriores ",
            "type": "I",
            "imageUrl": "http://someDirection",
            "description": "Metodo de pintado \"Gotele\" en Exteriores",
            "status": "active"
        },
        "subcategory": {},
        "parameters": [
            {
                "id": 1,
                "name": "Tiene Hijos",
                "description": "Padres",
                "status": "active"
            },
            {
                "id": 2,
                "name": "Vive Solo",
                "description": "Vive solo?",
                "status": "active"
            },
            {
                "id": 3,
                "name": "Educador",
                "description": "Profesion es educador",
                "status": "active"
            }
        ]
    }
}
```

---

#### http://localhost:12225/api/promotion/subcategory/:id (GET)

Get all Promotions of a Subcateogory.

**REQUEST**
Headers:  `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "promotions": [
        {
            "id": 5,
            "name": "Mejora tu linea BLanca",
            "description": "Descuento en Reparacion y Mantienimiento en Linea Blanca",
            "type": "generic",
            "percentDiscount": 0.15,
            "dateStart": "2019-12-01",
            "dateEnd": "2019-12-31",
            "status": "active",
            "equipinfras": {},
            "subcategory": {
                "id": 1,
                "name": "Linea Blanca",
                "description": "Neveras, Microondas,Aires Aconcicionados...",
                "status": "active"
            },
            "parameters": []
        }
    ]
}

```

---

#### http://localhost:12225/api/promotion/equipinfras/:id (GET)

Get all Promotions of an Equipment or Infrastructure.

**REQUEST**
Headers:  `x-access-token`
Path Variables: id = 1

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "promotions": [
        {
            "id": 1,
            "name": "Diciembre a Cocinar",
            "description": "Descuento en Reparacion y Mantienimiento de Cocinas",
            "type": "target",
            "percentDiscount": 0.1,
            "dateStart": "2019-12-01",
            "dateEnd": "2019-12-31",
            "status": "active",
            "equipinfras": {
                "id": 4,
                "name": "Televisor ",
                "type": "E",
                "imageUrl": "http://someDirection",
                "description": "Televisores",
                "status": "active"
            },
            "subcategory": {},
            "parameters": [
                {
                    "id": 1,
                    "name": "Tiene Hijos",
                    "description": "Padres",
                    "status": "active"
                },
                {
                    "id": 4,
                    "name": "Ama de casa",
                    "description": "Ocupacion es ama de casa ",
                    "status": "active"
                }
            ]
        }
    ]
}

```

---

#### http://localhost:12225/api/promotion/equipinfras/:eid/user/:uid (GET)

Get all Promotions of an Equipment or Infrastructure, that apply to a particular user.

**REQUEST**
Headers:  `x-access-token`
Path Variables: eid = 4, uid: 3

**RESPONSE**
```json
{
    "status": true,
    "message": {
        "code": 200
    },
    "promotions": [
        {
            "id": 1,
            "name": "Diciembre a Cocinar",
            "description": "Descuento en Reparacion y Mantienimiento de Cocinas",
            "type": "target",
            "percentDiscount": 0.1,
            "dateStart": "2019-12-01",
            "dateEnd": "2019-12-31",
            "status": "active",
            "equipinfras": {
                "id": 4,
                "name": "Televisor ",
                "type": "E",
                "imageUrl": "http://someDirection",
                "description": "Televisores",
                "status": "active"
            },
            "subcategory": {},
            "parameters": [
                {
                    "id": 1,
                    "name": "Tiene Hijos",
                    "description": "Padres",
                    "status": "active"
                }
            ]
        }
    ]
}

```

---


## Authors

|Name| Email | LinkedIn | Gitlab | Telegram |
|--|--|--|--|--|
| Junior Camacho | juniordaron@gmail.com |[juniordaron](https://www.linkedin.com/in/juniordaron) | @Darons  | @Darons |
| Gilberto Pérez | gilbertojpargas94@gmail.com |[gilbertojpargas94](https://www.linkedin.com/in/gilbertojpargas94/) | @gilbertojpargas94 | @elnoviodebetza |
| Maria Gabriela Moreno | marimorexx@gmail.com |[marimorex](/) | @marimorex | @marimorex |

