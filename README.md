## A08 - Final Presentation

### Angel Badillo, Miklos Moreno

### Description:

This assignment was to present over our final version of the app and API with all the required functionality.

### THE MOST AWESOMEST APP EVER

## Files

|   #   | File                                                         | Description                                                |
| :---: | ------------------------------------------------------------ | ---------------------------------------------------------- |
|   1   | [App.js](./App.js)                                           | Main application file.                                     |
|   3   | [assets](./assets)                                           | Directory for media such as images, etc.                   |
|   6   | [AwesomeStoreServices.js](./src/api/AwesomeStoreServices.js) | Contains functions for interacting with Awesome Store API. |
|   7   | [AppNavigator.js](./src/navigation/AppNavigator.js)          | Handles the navigation in the app.                         |
|   8   | [Home.js](./src/screens/Home.js)                             | Contains the Home screen of the app.                       |
|   9   | [Chat.js](./src/screens/Chat.js)                             | Contains the Chat screen of the app.                       |
|  10   | [Map.js](./src/screens/Map.js)                               | Contains the Map screen of the app.                        |
|  11   | [Search.js](./src/screens/Search.js)                         | Contains the Search screen of the app.                     |
|  12   | [Upload.js](./src/screens/Upload.js)                         | Contains the Upload screen of the app.                     |
|  13   | [Login.js](.src\screens\auth\Login.js)                       | Contains the Login screen of the app.                      |
|  14   | [Register.js](.src\screens\auth\Register.js)                 | Contains the Register screen of the app.                   |

### Instructions

#### Awesome Store API
- First, login to the server via SSH.
- Next, change the directory like so:

```
  cd /root/5373-MobileApps/Assignments/A05
```

- Start the virtual environment:

```
source .venv/bin/activate
```

- Run the script:

```
python api.py
```

- Go to https://thehonoredone.live:8085

#### Awesome Store React Native App
- First, ensure all required packages are installed with some package manager, for example:

```
yarn install
```

- Next, run the app with:
```
yarn expo start
```