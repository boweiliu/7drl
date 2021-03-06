import { Application, Container } from "pixi.js";
import { Entity } from "./entity";
import { World } from "./world";
import { Player } from "./player";
import { Keyboard } from "./keyboard";

export class GameState {
  public app      : Application;
  public stage    : Container;
  public keyboard : Keyboard;
  public entities : Entity[];
  public world   !: World;
  public player  !: Player;

  constructor(props: {
    app     : Application;
    keyboard: Keyboard;
  }) {
    this.app      = props.app;
    this.keyboard = props.keyboard;
    this.stage    = this.app.stage;
    this.entities = [];
  }
}