"use client";

import styles from "./user.module.css";
import { User } from "@/types/type";
import Skeleton from "react-loading-skeleton";

export default function ProfileSummary({ user,loading }: { user: User | null,loading:boolean }) {
 

  
  if (loading)
    return (
      <div className={styles.profileSummary}>
        {Array.from({ length: 3 }, (_, i) => (
          <section key={i}>
            <h2>
              <Skeleton height={30} width={"150px"} />
            </h2>
            <div className={styles.infoGrid}>
              {Array.from({ length: 8 }, (_, i) => (
                <>
                  <Skeleton key={i} height={30} />
                </>
              ))}
            </div>
          </section>
        ))}
      </div>
    );

    if(!user) return null

  const { profile, education, socials, guarantors } = user;
  console.log(guarantors);

  return (
    <div className={styles.profileSummary}>
      <section>
        <h2>Personal Information</h2>
        <div className={styles.infoGrid}>
          {[
            { label: "Full Name", value: profile.fullName },
            { label: "Phone Number", value: profile.phoneNumber },
            { label: "Email Address", value: profile.email },
            { label: "BVN", value: profile.bvn },
            { label: "Gender", value: profile.gender },
            { label: "Marital Status", value: profile.maritalStatus },
            { label: "Children", value: profile.children },
            { label: "Type of Residence", value: profile.residenceType },
          ].map((item, index) => (
            <InfoItem
              key={`personal-${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Education and Employment</h2>
        <div className={styles.infoGrid}>
          {[
            { label: "Level of Education", value: education.level },
            { label: "Employment Status", value: education.employmentStatus },
            { label: "Sector of Employment", value: education.sector },
            { label: "Duration of Employment", value: education.duration },
            { label: "Office Email", value: education.officeEmail },
            {
              label: "Monthly Income",
              value: `${education.monthlyIncome[0]} - ${education.monthlyIncome[1]}`,
            },
            { label: "Loan Repayment", value: education.loanRepayment },
          ].map((item, index) => (
            <InfoItem
              key={`education-${index}`}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Socials</h2>
        <div className={styles.infoGrid}>
          {[
            { label: "Twitter", value: socials.twitter },
            { label: "Facebook", value: socials.facebook },
            { label: "Instagram", value: socials.instagram },
          ].map((item, index) => (
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
        {guarantors?.map((guarantor, i) => (
          <div className={`${styles.infoGrid} ${styles.border}`} key={i}>
            <InfoItem label="Full Name" value={guarantor.fullName} />
            <InfoItem label="Phone Number" value={guarantor.phoneNumber} />
            <InfoItem label="Email Address" value={guarantor.email} />
            <InfoItem label="Relationship" value={guarantor.relationship} />

            {/* <hr /> */}
          </div>
        ))}
      </section>
    </div>
  );
}

function InfoItem({label, value }: { label: string; value: string }) {
  return (
    <div className={styles.infoItem}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
