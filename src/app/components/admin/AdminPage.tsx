"use client";
import { useEffect, useState } from "react";
import * as api from "@/utils/api/admin";
import Logout from "../shared/logout";
import { http } from "@/utils/api/axios";
import { getCookie } from "cookies-next";

export const AdminPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEvents = async () => {
    setLoading(true);
    const eventList: any = await api.getEvents();
    setLoading(false);
    setEvents(eventList);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <>
      <Logout />
      <pre>{JSON.stringify(events)}</pre>
      {/** 
      <div className="">
        <h1 className="">Eventos</h1>
        <div className="">...</div>
      </div>
      <div className="">
        {!loading &&
          events.length > 0 &&
          events.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
      */}
    </>
  );
};
