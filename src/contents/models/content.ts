export class Content {
  private expired = false;
  private watched = false;

  constructor(
    private id: number,
    private name: string,
    private duration: number,
    private provider: string,
    private media_type: string,
    private provider_id: string,
    private expires_at: number,
  ) {}

  public geId() {
    return this.id;
  }

  public isWatched(): boolean {
    return this.watched;
  }

  public setWatched() {
    this.watched = true;
  }

  public isExpired() {
    return this.expires_at < new Date().getTime();
  }
}
