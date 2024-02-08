import "source-map-support/register";
import { Context, APIGatewayEvent, APIGatewayProxyResultV2 } from "aws-lambda";

import Lock from "./src/Lock";
import Home from "./src/Home";
import Login from "./src/Login";
import Register from "./src/Register";


export const home = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    // We use asynchronous import here so we can better catch server-side errors during development
    const render = (await import("./src/server/render")).default;
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: await render(event,Home),
    };
  } catch (error) {
    // Custom error handling for server-side errors
    // TODO: Prettify the output, include the callstack, e.g. by using `youch` to generate beautiful error pages
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: `<html><body>${error.toString()}</body></html>`,
    };
  }
};


export const login = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    // We use asynchronous import here so we can better catch server-side errors during development
    const render = (await import("./src/server/render")).default;
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: await render(event,Login),
    };
  } catch (error) {
    // Custom error handling for server-side errors
    // TODO: Prettify the output, include the callstack, e.g. by using `youch` to generate beautiful error pages
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: `<html><body>${error.toString()}</body></html>`,
    };
  }
};


export const register = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    // We use asynchronous import here so we can better catch server-side errors during development
    const render = (await import("./src/server/render")).default;
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: await render(event,Register),
    };
  } catch (error) {
    // Custom error handling for server-side errors
    // TODO: Prettify the output, include the callstack, e.g. by using `youch` to generate beautiful error pages
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: `<html><body>${error.toString()}</body></html>`,
    };
  }
};


export const lock = async (event: APIGatewayEvent, _context: Context): Promise<APIGatewayProxyResultV2> => {
  try {
    // We use asynchronous import here so we can better catch server-side errors during development
    const render = (await import("./src/server/render")).default;
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: await render(event,Lock),
    };
  } catch (error) {
    // Custom error handling for server-side errors
    // TODO: Prettify the output, include the callstack, e.g. by using `youch` to generate beautiful error pages
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",  // Allow requests from any origin
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "text/html",
      },
      body: `<html><body>${error.toString()}</body></html>`,
    };
  }
};

