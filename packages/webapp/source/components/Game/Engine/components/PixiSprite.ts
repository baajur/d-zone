import { Component, Types } from 'ecsy'
import * as PIXI from 'pixi.js-legacy'

export default class PixiSprite extends Component<PixiSprite> {
	value!: PIXI.Sprite
}

PixiSprite.schema = {
	value: { type: Types.Ref },
}
