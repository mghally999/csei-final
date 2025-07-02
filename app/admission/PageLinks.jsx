import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function PageLinks({ dark }) {
  const router = useRouter();
  const pathSegments = router.asPath
    .split("/")
    .filter((segment) => segment !== "");

  // Function to format the breadcrumb text (e.g., "information-technology" => "Information Technology")
  const formatBreadcrumb = (segment) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Generate breadcrumbs
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const text = formatBreadcrumb(segment);

    return {
      href,
      text,
    };
  });

  // Add home as the first breadcrumb
  breadcrumbs.unshift({
    href: "/",
    text: "Home",
  });

  return (
    <section className={`breadcrumbs ${dark ? "bg-dark-1" : ""} `}>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              {breadcrumbs.map((breadcrumb, index) => (
                <div
                  key={index}
                  className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} ${
                    index === breadcrumbs.length - 1 ? "active" : ""
                  }`}
                >
                  {index === breadcrumbs.length - 1 ? (
                    <span>{breadcrumb.text}</span>
                  ) : (
                    <Link href={breadcrumb.href}>{breadcrumb.text}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
