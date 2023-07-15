import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { GrAdd } from "react-icons/gr";
import { LuEdit } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const TableTemplate = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleCall = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:5000/student/",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setUser(response.data.studentData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdateClick = (id) => {
    navigate(`/updateStudent/${id}`);
  };
  const handleClick = (id) => {
    navigate(`/EditProgress/${id}`);
  };
  useEffect(() => {
    handleCall();
  }, []);
  const data = { nodes: user };
  return (
    <Table data={data}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>StudentId</HeaderCell>
              <HeaderCell>StudentName</HeaderCell>
              <HeaderCell>Email</HeaderCell>
              <HeaderCell>Edit Student Details</HeaderCell>
              <HeaderCell>Add Progress</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item) => (
              <Row key={item._id} item={item}>
                <Cell>{item.studentId}</Cell>
                <Cell>{item.studentName}</Cell>
                <Cell>{item.studentEmail}</Cell>
                <Cell>
                  <LuEdit
                    className="cursor-pointer"
                    onClick={() => {
                      handleUpdateClick(item.studentId);
                    }}
                  />
                </Cell>
                <Cell className=" text-center">
                  <GrAdd
                    className="cursor-pointer"
                    onClick={() => {
                      handleClick(item.studentId);
                    }}
                  />
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
};

export default TableTemplate;
