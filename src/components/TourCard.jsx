import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Root = styled(Card)(({ theme, backgroundImageUrl }) => ({
  display: "flex",
  flexDirection: "row",
  minHeight: 200,
  width: "80%",
  backgroundImage: `url(${backgroundImageUrl})`, // Replace with your image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    transform: "scale(1.02)",
    transition: "transform 0.5s",
  },
}));

const Content = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: theme.spacing(2),
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    transition: "background-color 0.5s",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "400",
  textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
  marginTop: theme.spacing(1),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "0.85rem",
  textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
  marginTop: theme.spacing(1),
}));

export default function TourCard( {tourDetails}) {
  return (
    <Root backgroundImageUrl={tourDetails.imageUrl}>
      <Content>
        <Title component="h2">{tourDetails.title}</Title>
        <SubTitle component="h3">{tourDetails.SubTitle}</SubTitle>
        <Paragraph component="p">
            {tourDetails.description}
        </Paragraph>
      </Content>
    </Root>
  );
}
