"use client";
import { useEffect, useState } from "react";
import * as api from "@/utils/api/admin";
import Logout from "../shared/logout";
import { getEvents } from "@/utils/api/admin";
import useSWR from 'swr'

export const AdminPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data } = useSWR(['get-events', '/admin/events'], getEvents)

  return (
    <>
      <Logout />
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
