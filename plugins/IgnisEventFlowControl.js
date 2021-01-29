//=============================================================================
// RPG Maker MZ - Ignis Battler After Image
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Character Trail/After Image
 * @author Reisen (Mauricio Pastana)

  * @help Ignis Character After Image - this plugins is under zlib license
 * For support and new plugins join our discord server! https://discord.gg/Kh9XXZ2
 * Want to support new creations? be a patreon! https://www.patreon.com/raizen884?fan_landing=true
 * Configure the parameters, to disable the actor after image, just create a plugin command redirecting
 * to the player with a high value on speed.


 * @command after Image Event
 * @text 
 * @desc Configure after image for events
 * 
 * @arg eventImageConfig
 * @type struct<ImageEvents>

 * @command after Image Player
 * @text 
 * @desc Configure after image for player
 * 
 * @arg playerImageConfig
 * @type struct<ImagePlayer>

 * @command after Image Stop Event
 * @text 
 * @desc Stops after image from certain events
 * 
 * @arg eventId
 * @type number

 * @param Player After Image
 * @type struct<AfterImage>
 * @text Default Player AfterImage
 *

 */
/*~struct~AfterImage:
 * @param extra images
 * @type number
 * @default 0
 * @desc Configure them putting on the suffix of the image name [AI1], [AI2]... for each extra image
 * @param shadow number
 * @type number
 * @default 15
 * @desc Quantity of after images
 * @param frequency
 * @type number
 * @default 3
 * @desc The lower, the faster the afterImages appear
 * @param fadeSpeed
 * @type number
 * @default 10
 * @desc The higher, the faster the afterImages fade away
 * @param needSpeed
 * @type number
 * @default 5
 * @desc The higher this number, the higher the character needs to go to produce afterimages, 0 to disable, 5 is default
 */

/*~struct~ImageEvents:
* @param eventId
* @type number
* @default 1
* @param extra images
* @type number
* @default 0
* @desc Configure them putting on the suffix of the image name [AI1], [AI2]... for each extra image
* @param shadow number
* @type number
* @default 15
* @desc Quantity of after images
* @param frequency
* @type number
* @default 3
* @desc The lower, the faster the afterImages appear
* @param fadeSpeed
* @type number
* @default 10
* @desc The higher, the faster the afterImages fade away
* @param needSpeed
* @type number
* @default 5
* @desc The higher this number, the higher the character needs to go to produce afterimages, 0 to disable, 5 is default
*/
/*~struct~ImagePlayer:
* @param shadow number
* @type number
* @default 15
* @desc Quantity of after images
* @param frequency
* @type number
* @default 3
* @desc The lower, the faster the afterImages appear
* @param fadeSpeed
* @type number
* @default 10
* @desc The higher, the faster the afterImages fade away
* @param needSpeed
* @type number
* @default 5
* @desc The higher this number, the higher the character needs to go to produce afterimages, 0 to disable, 5 is default

*/

//////////////////////////////////////////////////////////////////////////////////////////////////
//                      Ignis Character After Image
//////////////////////////////////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------------------------
// SceneManager
//
// The scene class of the Manager.
//=============================================================================
// onKeyDown - alias function
//=============================================================================
