import React from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends React.Component {
  static async getInitialProps(context) {
    return { appName: 'Super App' };
  }

  render() {
    return (
      <div>
        <h1>The Main Page of {this.props.appName}</h1>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go To Auth</button>
      </div>
    );
  }
}

export default IndexPage;