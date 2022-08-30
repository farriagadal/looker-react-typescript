// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const fs = require("fs");
const path = require("path");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
if (!process.env.POSTS_SERVER_URL) {
  // webpack 5 is stricter about environment variables. The POSTS_SERVER_URL
  // environment variable was not mentioned in the README so default it for
  // those developers who may have created a .env file without the variable.
  process.env.POSTS_SERVER_URL = "http://127.0.0.1:3000";
}

const PATHS = {
  app: path.join(__dirname, "src/index.tsx"),
};

module.exports = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: /src/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },          
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
      // {
      //   test: /\.(woff|woff2)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000,
      //       },
      //     }
      //   ]
      // },
      // { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      // {
      //   test: /\.svg$/,
      //   use: ['svg-loader']
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf)([\?]?.*)$/,
      //   use: ['file-loader']
      // },
      // { test: /\.(woff|woff2|eot|ttf)$/, use: ['url-loader?limit=100000']}
      // {
      //   test: /\.(woff)$/i,
      //   type: 'asset/resource',
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         limit: 1000000,
      //       },
      //     },
      //   ]
      // }
      // {
      //   test: /\.(woff)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].woff',
      //         esModule: false // <- here
      //       }
      //     }
      //   ]
      // }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: { buffer: false },
  },
  devtool: "source-map",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE_MODE || "disabled",
    })
  ],
};

