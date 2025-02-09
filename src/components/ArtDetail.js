import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Card, Image, Space, Statistic } from "antd";
import "../ArtDetail.css";
import BidDrawer from "./BidDrawer";
import CarouselFront from "./Carousel";
import { useNavigate } from "react-router";
import "../CarousselF.css";

const { Meta } = Card;

function ArtDetail(props) {

  const { artId } = useParams();
  const [showForm, setShowForm] = useState(true);
  const navigate = useNavigate();
  const { btnSubmitG } = props;

  const [bid, setBid] = useState([]);

  const [artDetail, setArtDetail] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/auctiondetail/${artId}`);
      setArtDetail(response.data);
    };
    getData();
  }, [artId]);
  if (!artDetail) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  const { Countdown } = Statistic;
  const deadline =
    Date.parse(artDetail.createdAt) +
    1000 * 60 * 60 * 24 * artDetail.days +
    1000 * 30;
  //console.log(Date.now())
  //console.log(deadline)

  function onFinish() {
    console.log("finished!");
    setShowForm(false);
  }

  if (showForm) {
    Date.now() >= deadline && setShowForm(false);
  }

  const handleSubmitG = async (event) => {
    event.preventDefault();
    console.log("bid submited");
    if (event.target.bid.value >= artDetail.price) {
      let newBid = {
        bid: event.target.bid.value,
        userId: props.user._id,
      };
      console.log(newBid);
      let response = await axios.post(
        `${API_URL}/auctiondetail/${artId}`,
        newBid
      );
      setBid([response.data, ...bid]);
      navigate("/");
      console.log(response.data);
    } else {
      function myFunction() {
        alert("Your bid must be higher than the starting bid!");
      }
      return myFunction();
    }
  };

  return (
    <div>
      <CarouselFront />

      <div className="detail">
        <Space direction="vertical">
          <Card
            hoverable
            style={{ width: 240 }}
            width={200}
            cover={<Image width={240} src={artDetail.image} />}
          >
            <Meta title={artDetail.title} />
            <br />
            <p>by : {artDetail.artist}</p>
            <p>Year: {artDetail.year}</p>
            <p>Starting bid: € {artDetail.price}</p>
          </Card>
          <br />

          <div className="offerButton">
            <Countdown
              title="Auction expires"
              value={deadline}
              onFinish={onFinish}
            />

            {showForm ? (
              <BidDrawer btnSubmitG={handleSubmitG} user={props.user} />
            ) : null}
          </div>
        </Space>
      </div>
    </div>
  );
}
export default ArtDetail;
