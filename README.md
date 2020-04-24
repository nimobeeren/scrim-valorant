*Yes, it's old code. But it works, right?* :man_shrugging:

# Scrim VALORANT

## Description

A scrim, derived from the word skirmish, is when two teams play a practice match in a competitive environment. This web app provides a platform to set up and participate in these matches, specifically in the context of the game VALORANT.

The aim is to provide players with a quick and easy way to find an opponent at fitting skill level, who wants to play the same map (game environments). Currently, this is usually done by posting text messages on Facebook groups, Discord or IRC channels. This app provides the advantages of easy filtering through posts, simplified communication and less clutter.
All functionality can be evaluated using an anonymous account, which is generated when you first visit the site. To continue your session using different browsers or devices, you can log in with a Steam account.

## Usage

To run the app, you'll need to create a configuration file named `config.json` in the same directory as this README. It should have the following shape, filled in with your own data:

```
{
  // Including username/pw
  "mongoServer": "URL for the MongoDB instance",

  "secret": "some secret phrase"
}
```

Install the dependencies by running `yarn install`, once in the root directory and once in the `/client` directory. To start the app, run `yarn start` in the root directory.

The default port for the development server is 3000, so you can view the app on `http://localhost:3000`. The default port for the back-end is 8000.

### Production

The development server always serves the latest version of the client, but it is not optimized for production. To create a production build of the app, go to `/client` and run `yarn build`. Now, when you start the app from the root directory with `yarn start`, the production build will be served on `http://localhost:8000`.
