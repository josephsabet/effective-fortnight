import Mark from "../model/Mark";

class MarkController {
  index() {}
  store(name? :string ,mid?: string ,final?:string ,activities?:string) {
    if (
      name != "" &&
      mid != "" &&
      final != "" &&
      activities != ""
    ) {
        return true;
    }
    return false;
  }
  delete(mark: Mark) {}
}

export default MarkController;
