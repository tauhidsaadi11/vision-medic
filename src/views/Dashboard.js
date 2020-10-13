/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  CardHeader
} from "shards-react";

import PageTitle from "../components/common/PageTitle";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/rontgen1.jpg"),
          patientName: "H. AGUNG BUDI SANTOSO",
          patientId: '#0000201004',
          patientStudi: 'Studi1',
          patientSeries: 'Series',
          Tanggal: '07 Oct 2020',
        },
        {
            backgroundImage: require("../images/content-management/rontgen2.jpeg"),
            patientName: "SODIK MUDJAHID",
            patientId: '#0000201004',
            patientStudi: 'Studi1',
            patientSeries: 'Series',
            Tanggal: '29 Sept 2020',
          },
          {
            backgroundImage: require("../images/content-management/rontgen3.png"),
            patientName: "JUNIKO BP SIAHAAN",
            patientId: '#0000201004',
            patientStudi: 'Studi1',
            patientSeries: 'Series',
            Tanggal: '17 Sept 2020',
          },
          {
            backgroundImage: require("../images/content-management/rontgen1.jpg"),
            patientName: "NURUL ARIFIN",
            patientId: '#0000201004',
            patientStudi: 'Studi1',
            patientSeries: 'Series',
            Tanggal: '07 Oct 2020',
          },
          {
              backgroundImage: require("../images/content-management/rontgen2.jpeg"),
              patientName: "MUHAMMAD FARHAN",
              patientId: '#0000201004',
              patientStudi: 'Studi1',
              patientSeries: 'Series',
              Tanggal: '29 Sept 2020',
            },
            {
              backgroundImage: require("../images/content-management/rontgen3.png"),
              patientName: "Julius Nova",
              patientId: '#0000201004',
              patientStudi: 'Studi1',
              patientSeries: 'Series',
              Tanggal: '17 Sept 2020',
            },
      ],
    };
  }

  render() {
    const {
      PostsListTwo,
    } = this.state;

    const mystyle = {
      fontSize: "20px",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "5px",
      paddingBottom: "5px"
    };

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Pasien Baru" subtitle="" className="text-sm-left ml-5" />
        </Row>

        {/* Second Row of Posts */}
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="11" md="11" sm="12" className="ml-5 mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                </div>
                <CardBody>
                  <Row>
                    <Col lg="11" sm="11" className="">
                      <table className=" mb-0 table-sm" width="80%">
                        <tbody>
                            <tr>
                                <td width="30%">Nama Pasien</td><td width="1px">:</td>
                                <td>{post.patientName}</td>
                            </tr>
                            <tr>
                                <td width="30%">ID Pasien</td><td width="1px">:</td>
                                <td>{post.patientId}{idx}</td>
                            </tr>
                            <tr>
                                <td width="30%">Studi</td><td width="1px">:</td>
                                <td>{post.patientStudi}</td>
                            </tr>
                            <tr>
                                <td width="30%">Series</td><td width="1px">:</td>
                                <td>{post.patientSeries}</td>
                            </tr>
                            <tr>
                                <td width="30%">Tanggal</td><td width="1px">:</td>
                                <td>{post.Tanggal}</td>
                            </tr>
                        </tbody>
                      </table>
                    </Col>
                    <Col lg="1" sm="1">
                      <table className="mb-0 table-sm" width="100%">
                          <tr>
                            <td>
                              <Button outline size="sm" style={mystyle} theme="warning">
                                <i className="material-icons">star_rate</i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Button outline size="sm" style={mystyle}>
                                <i className="material-icons">share</i>
                              </Button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Button outline theme="danger" size="sm" style={mystyle}>
                                <i className="material-icons">delete_forever</i>
                              </Button>
                            </td>
                          </tr>
                        </table>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      
      </Container>
    );
  }
}

export default Dashboard;
