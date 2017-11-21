import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';

// components
import { Header, Sidebar, Breadcrumb, Aside, Footer } from 'components';

// containers
import { MetadataDashboard, FieldMgt, SchemaMgt } from 'containers';

class MetadataLayout extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route
                  path="/metadata/dashboard"
                  name="Metadata Dashboard"
                  component={MetadataDashboard}
                />
                <Route path="/metadata/fields" name="Fields" component={FieldMgt} />
                <Route path="/metadata/schemas" name="Schemas" component={SchemaMgt} />
                <Redirect from="/metadata" to="/metadata/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default MetadataLayout;