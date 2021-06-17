import React, { Component } from 'react';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import { Button } from '@paljs/ui/Button';
import { Container } from '@material-ui/core';
import { Card, CardBody } from '@paljs/ui/Card';

import SEO from '../../components/SEO';
import { isLoggedIn } from '../../components/services/auth';
import { getURLParams } from '../../components/utils/common';

const isBrowser = typeof window !== "undefined";

export default class EditLead extends Component {
  state = {
    LeadID: 0,
    LeadName: 'Sample: RACHEAL MILLER'
  };
  componentDidMount() {
    if (!isLoggedIn() && isBrowser ) {
      window.location.href="/"
    }
    const { saveState } = this;
    const LeadID = getURLParams('leadID');
    saveState({ LeadID });
  }
  saveState = (obj) => {
    this.setState(obj);
  }
  onBack = () => {}
  onPrintView = () => {}
  render() {
    const { onBack, onPrintView, state: { LeadName, LeadID } } = this;
    return (<>
      <SEO title="View/Edit Lead" />
      <div className="content-wrapper px-4 py-4">
        <Container style={{ height: 'auto', marginBottom: '1rem' }}>
          <Row>
            <Col breakPoint={{ xs: 2 }}>
              <Button className="mx-1" status="Info" type="button" shape="square" onClick={onBack.bind(this)} fullWidth>BACK</Button>
            </Col>
            <Col breakPoint={{ xs: 2 }}>
              <Button className="mx-1" status="Success" type="button" shape="square" onClick={onPrintView.bind(this)} fullWidth>PRINT VIEW</Button>
            </Col>
          </Row>
        </Container>
        <Card>
          <CardBody>
            <Container>
            <Row>
              <Col breakPoint={{ xs: 12 }}>
                <h1 className="text-center mb-5">View/Edit {LeadName} ({LeadID})</h1>
              </Col>
            </Row>
            </Container>
          </CardBody>
        </Card>
      </div>
    </>);
  }
}