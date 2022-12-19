import React from "react";
import "./moreInfo.scss";
import "../../../globalClasses.scss";

const MoreInfo = () => {
  return (
    <section className="more-info padding-global">
      <h3>Naši risiveri za TV su otključani. Šta to znači:</h3>
      <ul>
        <li>
          <span>Možete ih nositi svuda sa sobom</span> i koristiti na drugim TV
          aparatima i lokacijama, potreban je bilo koji internet do 10 Mbps za
          pouzdan signal.
        </li>
        <li>
          Direktno na risiver, možete sami{" "}
          <span>instalirati aplikacije za TV</span> dostupne na{" "}
          <span>Google Play</span> prodavnici.
        </li>
        <li>
          Možete <span>povezati druge uređaje direktno na risiver</span> – miša,
          tastaturu, džojstik, zvučnik, eksterni hard disk, usb, memorijsku
          karticu...
        </li>
      </ul>
    </section>
  );
};

export default MoreInfo;
