<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from "react";

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

const TermsAndConditions = () => {
  const [content, setContent] = useState<ContentType>({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: { text: "Terms and Conditions for Swasthi", level: 2 },
      },
      { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
      {
        type: "paragraph",
        data: {
          text: `At Swasthi, we are committed to transparency in our terms and conditions...`,
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Acceptance of Terms.",
            "User Responsibilities.",
            "Intellectual Property.",
            "Limitation of Liability.",
            "Governing Law.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "For any queries, contact us at help@swasthi.com.",
        },
      },
    ],
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/terms"
        );
        if (!response.ok) throw new Error("Failed to fetch content");

        const data: { content: ContentType } = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []);

  const renderBlock = (block: BlockType, index: number) => {
    switch (block.type) {
      case "header":
        return (
          <h2
            key={index}
            className="text-lg font-bold underline text-white mb-4"
          >
            {block.data.text}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="text-gray-300 mb-4">
            {renderText(block.data.text)}
          </p>
        );
      case "list":
        return (
          <ol
            key={index}
            className="list-decimal pl-6 text-gray-300 mb-4 space-y-1"
          >
            {block.data.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        );
      default:
        return null;
    }
  };

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
        <div className="bg-custom-gradient shadow-lg p-6 rounded-lg border border-gray-600">
          {content.blocks.map((block, index) => renderBlock(block, index))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
=======
"use client";

import React, { useState, useEffect } from "react";

const TermsAndConditions = () => {
  const [content, setContent] = useState<any>({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: { text: "Data Deletion Policy for Swasthi", level: 2 },
      },
      { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
      {
        type: "paragraph",
        data: {
          text: `At Swasthi, we are committed to ensuring that our users have control over their personal data...`,
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Right to Deletion.",
            "Request for Deletion.",
            "Timeline for Deletion.",
            "Consequences of Deletion.",
            "Exceptions to Data Deletion.",
            "Changes to This Policy.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "For any questions, concerns, or requests, contact us at help@swasthi.com.",
        },
      },
    ],
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://admin-panel-backend-knoh.onrender.com/api/terms"
        );
        const data = await response.json();
        if (response.ok) setContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
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
            switch (block.type) {
              case "header":
                return (
                  <h2
                    key={index}
                    className="text-lg it underline font-bold text-white mb-2"
                  >
                    {block.data?.text}
                  </h2>
                );
              case "paragraph":
                return (
                  <p key={index} className="text-gray-300 mb-2">
                    {renderText(block.data?.text)}
                  </p>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
>>>>>>> 2b8ec70e367b15bdf5d40f299968819c031792d9
