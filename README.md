# Policy API service

## Installation

```
npm install
```

change values in .env file (MONGODB_URI, PORT)

```
npm start
```

## Usage

users list available at [http://www.mocky.io/v2/5808862710000087232b75ac](http://www.mocky.io/v2/5808862710000087232b75ac)

policies list available at [http://www.mocky.io/v2/580891a4100000e8242b75c5](http://www.mocky.io/v2/580891a4100000e8242b75c5)

## Authentication
In the request header just set key 'auth' with a name as value (taken from users list)
example 'user' role:
```
auth:Liliana
```
example 'admin' role:
```
auth:Manning
```
```
curl -X GET \
  'http://localhost:3100/users/?name=Liliana' \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Host: localhost:3100' \
  -H 'auth: Manning' \
  -H 'cache-control: no-cache'
```
if not set the API will return an unauthorized response error

## Endpoints

```
GET /users

```
will return all users

```
GET /users?name=name

```
filter users by name

```
GET /users?id=id

```
filter users by id


```
GET /policies

```
will return all policies

```
GET /policies?name=name

```
filter policies by username

```
GET /:policyId/user

```
get user data for a policy


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)