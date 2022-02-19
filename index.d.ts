
type cbFn = function (action: string, location: any): void;
namespace SimpleHistory {
  function listen(cb: cbFn): string;
  function unlisten(id: string): void;
  function push(url: string, state: any): void;
  function replace(url: string, state: any): void;
  function go(num: Number): void;
  function back(): void;
  function forward(): void;
}

export = SimpleHistory;
export as namespace SimpleHistory;
