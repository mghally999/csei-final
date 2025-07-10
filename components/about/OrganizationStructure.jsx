"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OrganizationStructure = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const nodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  return (
    <section className="layout-pt-lg layout-pb-lg bg-custom-grey" ref={ref}>
      <div className="container">
        <div className="row justify-center text-center mb-50">
          <div className="col-auto">
            <motion.h1
              className="text-30 md:text-40 font-bold text-dark-1"
              initial={{ opacity: 0, y: -20 }}
              animate={controls}
              variants={nodeVariants}
            >
              Organization Structure
            </motion.h1>
            <motion.p
              className="text-16 md:text-18 text-gray-1 mt-10"
              initial={{ opacity: 0 }}
              animate={controls}
              variants={nodeVariants}
              transition={{ delay: 0.2 }}
            >
              Clear hierarchy and reporting structure of our institution
            </motion.p>
          </div>
        </div>

        <motion.div
          className="org-chart-container"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Board of Management - Top Level */}
          <div className="org-level org-top">
            <motion.div
              className="org-node main-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Board of Management</div>
              <div className="org-connector vertical"></div>
            </motion.div>
          </div>

          {/* Head of Academy and General Manager */}
          <div className="org-level org-leadership">
            <motion.div
              className="org-node leadership-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Head of Academy</div>
              <div className="org-connector vertical-down"></div>
              <div className="org-connector horizontal-left"></div>
            </motion.div>
            <motion.div
              className="org-node leadership-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">General Manager</div>
              <div className="org-connector vertical-down"></div>
            </motion.div>
          </div>

          {/* Lead Internal Assurer and Finance */}
          <div className="org-level org-departments">
            <motion.div
              className="org-node department-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Lead Internal Assurer</div>
              <div className="org-connector vertical-down"></div>
            </motion.div>
            <motion.div
              className="org-node admin-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Finance</div>
            </motion.div>
          </div>

          {/* Examination and Internal Auditor */}
          <div className="org-level org-departments">
            <motion.div
              className="org-node department-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Examination</div>
              <div className="org-connector vertical-down"></div>
            </motion.div>
            <motion.div
              className="org-node admin-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Internal Auditor</div>
            </motion.div>
          </div>

          {/* Academics with Admission and Student Support */}
          <div className="org-level org-departments">
            <motion.div
              className="org-node department-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Academics</div>
              <div className="org-connector vertical-down"></div>
            </motion.div>
            <div className="flex flex-col gap-3">
              <motion.div
                className="org-node admin-node"
                variants={nodeVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="org-position">Admission</div>
              </motion.div>
              <motion.div
                className="org-node admin-node"
                variants={nodeVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="org-position">Student Support</div>
              </motion.div>
            </div>
          </div>

          {/* All Faculties and Admin in one horizontal line */}
          <div className="org-level org-faculty">
            <motion.div
              className="org-node faculty-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Health Care Faculty/Assessor</div>
            </motion.div>
            <motion.div
              className="org-node admin-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Human Resources</div>
            </motion.div>
            <motion.div
              className="org-node faculty-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Computing Faculty/Assessor</div>
            </motion.div>
            <motion.div
              className="org-node admin-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Information Technology</div>
            </motion.div>
            <motion.div
              className="org-node faculty-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">
                Culinary Arts and Tourism Faculty/Assessor
              </div>
            </motion.div>
            <motion.div
              className="org-node faculty-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Business Faculty/Assessor</div>
            </motion.div>
            <motion.div
              className="org-node faculty-node"
              variants={nodeVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="org-position">Placement</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Optimized Styles */}
        <style jsx global>{`
          .org-chart-container {
            width: 100%;
            overflow-x: auto;
            padding: 20px 0;
          }

          .org-level {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 16px;
            position: relative;
            gap: 12px;
          }

          .org-node {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 12px 15px;
            text-align: center;
            width: 170px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 2;
            transition: all 0.3s ease;
          }

          /* Connector styles */
          .org-connector {
            position: absolute;
            background: #d1d5db;
            z-index: 1;
            transition: all 0.3s ease;
          }

          .vertical {
            width: 2px;
            height: 20px;
            left: 50%;
            top: 100%;
            transform: translateX(-50%);
          }

          .vertical-down {
            width: 2px;
            height: 20px;
            left: 50%;
            bottom: -20px;
            transform: translateX(-50%);
          }

          .horizontal-left {
            width: 50%;
            height: 2px;
            left: 50%;
            bottom: -20px;
            transform: translateX(-100%);
          }

          /* Node colors */
          .main-node {
            background: #f3f4f6;
            border-color: #d1d5db;
            font-weight: 600;
            width: 200px;
          }

          .leadership-node {
            background: #eff6ff;
            border-color: #bfdbfe;
          }

          .department-node {
            background: #f0fdf4;
            border-color: #bbf7d0;
          }

          .faculty-node {
            background: #f5f3ff;
            border-color: #ddd6fe;
          }

          .admin-node {
            background: #f9fafb;
            border-color: #d1d5db;
          }

          .org-position {
            font-weight: 600;
            color: #111827;
            font-size: 13px;
            white-space: normal;
            word-break: break-word;
            line-height: 1.4;
          }

          /* Responsive adjustments */
          @media (max-width: 1024px) {
            .org-node {
              width: 160px;
              padding: 10px 12px;
            }
            .main-node {
              width: 180px;
            }
          }

          @media (max-width: 768px) {
            .org-level {
              flex-direction: column;
              align-items: center;
              gap: 12px;
            }

            .org-node {
              width: calc(100% - 30px);
              margin-bottom: 12px;
            }

            .org-connector.vertical-down,
            .org-connector.horizontal-left {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default OrganizationStructure;
