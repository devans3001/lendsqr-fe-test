"use client";

import {
  personalInfo,
  socialInfo,
  guarantorInfo,
  educationEmploymentInfo,
} from "@/utils/data";
import styles from "./user.module.css";

export default function ProfileSummary() {
  return (
    <div className={styles.profileSummary}>
      <section>
        <h2>Personal Information</h2>
        <div className={styles.infoGrid}>
          {personalInfo.map((item, index) => (
            <InfoItem key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <section>
        <h2>Education and Employment</h2>
        <div className={styles.infoGrid}>
          {educationEmploymentInfo.map((item, index) => (
            <InfoItem
              key={`edu-emp-${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Socials</h2>
        <div className={styles.infoGrid}>
          {socialInfo.map((item, index) => (
            <InfoItem
              key={`social-${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </section>

      <section>
         <h2>Guarantor</h2>
        <div className={styles.infoGrid}>
          {guarantorInfo.map((item, index) => (
            <InfoItem
              key={`guarantor-${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>

        <div className={styles.infoGrid}>
          {guarantorInfo.map((item, index) => (
            <InfoItem
              key={`education-${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.infoItem}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
