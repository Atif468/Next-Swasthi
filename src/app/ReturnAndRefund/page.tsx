"use client";
import React, { useState, useEffect } from "react";

<<<<<<< HEAD
// Define types for blocks
type BlockType =
  | { type: "header"; data: { text: string; level: number } }
  | { type: "paragraph"; data: { text: string } }
  | { type: "list"; data: { style: string; items: string[] } };

// Define type for content
type ContentType = {
  time: number;
  blocks: BlockType[];
};

const ReturnAndRefund = () => {
  const [content, setContent] = useState<ContentType>({
=======
const ReturnAndRefund = () => {
  const [content, setContent] = useState<any>({
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
<<<<<<< HEAD
        data: { text: "Return and Refund Policy for Swasthi", level: 2 },
=======
        data: { text: "Data Deletion Policy for Swasthi", level: 2 },
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
      },
      { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
      {
        type: "paragraph",
        data: {
<<<<<<< HEAD
          text: "At Swasthi, we aim to ensure customer satisfaction with our return and refund policies...",
=======
          text: `At Swasthi, we are committed to ensuring that our users have control over their personal data...`,
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
<<<<<<< HEAD
            "Eligibility for Returns.",
            "Procedure for Returns.",
            "Timeline for Refunds.",
            "Non-Refundable Items.",
            "Contact for Support.",
=======
            "Right to Deletion.",
            "Request for Deletion.",
            "Timeline for Deletion.",
            "Consequences of Deletion.",
            "Exceptions to Data Deletion.",
            "Changes to This Policy.",
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
          ],
        },
      },
      {
        type: "paragraph",
        data: {
<<<<<<< HEAD
          text: "For any questions, concerns, or requests, contact us at support@swasthi.com.",
=======
          text: "For any questions, concerns, or requests, contact us at help@swasthi.com.",
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
        },
      },
    ],
  });

<<<<<<< HEAD
  // Fetch dynamic content from the backend
=======
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/return"
        );
<<<<<<< HEAD
        if (!response.ok) throw new Error("Failed to fetch content");

        const data: { content: ContentType } = await response.json();
        setContent(data.content);
=======
        const data = await response.json();
        if (response.ok) setContent(data.content);
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
<<<<<<< HEAD

    fetchContent();
  }, []);

  // Function to render text with sanitization
  const renderText = (text: string | undefined) => {
    if (!text) return null;

    const sanitizedText = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: sanitizedText }} />;
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4">
      <div className="max-w-7xl mx-auto bg-neutral-900 mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient shadow-lg shadow-white p-4 rounded-lg border border-gray-600">
          {content.blocks.map((block, index) => {
=======
    fetchContent();
  }, []);

  const renderText = (text: string | undefined) => {
    if (typeof text !== "string") return null;
    text = text
      .replace(/&nbsp;/g, " ")
      .replace(/<b>/g, "<strong>")
      .replace(/<\/b>/g, "</strong>");
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4 ">
      <div className="max-w-7xl mx-auto bg-neutral-900  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="bg-custom-gradient shadow-lg shadow-white p-4 rounded-lg border border-gray-600">
          {content.blocks.map((block: any, index: number) => {
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
            switch (block.type) {
              case "header":
                return (
                  <h2 key={index} className="text-lg font-bold text-white mb-2">
<<<<<<< HEAD
                    {block.data.text}
=======
                    {block.data?.text}
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
                  </h2>
                );
              case "paragraph":
                return (
                  <p key={index} className="text-gray-300 mb-2">
<<<<<<< HEAD
                    {renderText(block.data.text)}
                  </p>
                );
              case "list":
                return (
                  <ol
                    key={index}
                    className="list-decimal pl-6 text-gray-300 mb-2"
                  >
                    {block.data.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                );
=======
                    {renderText(block.data?.text)}
                  </p>
                );
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ReturnAndRefund;
