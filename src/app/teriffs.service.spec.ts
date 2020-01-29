import { TestBed } from "@angular/core/testing";

import { TeriffsService } from "./teriffs.service";

describe("TeriffsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TeriffsService = TestBed.get(TeriffsService);
    expect(service).toBeTruthy();
  });
});
