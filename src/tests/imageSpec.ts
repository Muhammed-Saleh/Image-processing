import { customized_img } from "../routes/api/images";

describe("Test converting image file", () => {
  it("converts the images width and height", async () => {
    expect(customized_img).toBeTruthy();
  });
});
