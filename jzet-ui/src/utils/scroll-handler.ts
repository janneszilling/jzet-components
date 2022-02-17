export class ScrollHandler {
  public static cancelScrollingKeyFilter = (event: KeyboardEvent) => {
    if (event.keyCode >= 33 && event.keyCode <= 40) {
      ScrollHandler.cancelScrolling(event);
    }
  };

  public static cancelScrolling = event => {
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.returnValue = false;
  };
}
