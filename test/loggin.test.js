import { logger } from "../src/app/logging.js";

describe("logger testing", () => {
  it("info", async () => {
    logger.info("test info");
  });
  it("warn", async () => {
    logger.warn("test warn");
  });
  it("error", async () => {
    logger.error("test error");
  });
});
